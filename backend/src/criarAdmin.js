const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

const pool = require("./db");

async function criarAdmin(){
    const senhaCriptografada = await bcrypt.hash(process.env.ADMIN_SENHA,10);

    await pool.query(
        "INSERT INTO admin (email, senha) VALUES ($1, $2)",[process.env.ADMIN_EMAIL, senhaCriptografada]
    );
    console.log("Admin criado com sucesso");
    process.exit();
}

criarAdmin(); 