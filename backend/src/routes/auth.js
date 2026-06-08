const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../db");

const router = express.Router();

router.post("/login", async (req,res) => {
    const {email,senha} = req.body;
    
    try {
        const resultado = await pool.query(
            "SELECT * FROM admin WHERE email = $1", [email]
        );
        const admin = resultado.rows[0];

        if(!admin){
            return res.status(401).json({ erro: "Credenciais inválidas"});
        }

        const senhaCorreta = await bcrypt.compare(senha, admin.senha);

        if (!senhaCorreta){
            return res.status(401).json({ erro: "Credenciais inválidas"});

        }

        const token = jwt.sign(
            {id: admin.id, email: admin.email},
            process.env.JWT_SECRET,
            {expiresIn: "8h"}
        );

        res.json({token})

    } catch (err) {

        console.error(err);
        res.status(500).json({ erro: "Erro interno do servidor"});

    }

});

module.exports = router;

    