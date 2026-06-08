//configurações do Express

const express = require('express');
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors()); 
app.use(express.json());

// app.use("/auth", authRoutes);
// app.use("/pedidos", pedidosRoutes)

app.get('/', (req, res) => {
  res.send('API rodando com sucesso');
});

app.listen(3001, () => {
  console.log('Servidor rodando');
});