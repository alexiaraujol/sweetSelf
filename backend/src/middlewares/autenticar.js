// verifica o JWT 
const jwt = require("jsonwebtoken");

function autenticar(req, res, next){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({erro: "Token não fornecido"});
    }
    const token = authHeader.split(" ")[1];

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = payload;
        next();
    } catch(err){
        return res.status(401).json({erro: "Token inváalido ou expirado"});
    }
}

module.exports = autenticar;