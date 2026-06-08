//é aonde fica o CRUD de pedidos
const express = require("express");
const pool = require("../db");
const autenticar = require("../middlewares/autenticar");

const router = express.Router();

router.post("/", async (req, res) => {
  const { senha, nome, pagamento, observacao, itens, total } = req.body;

  try {
    await pool.query("BEGIN");
    const resultadoPedido = await pool.query(
      `INSERT INTO pedidos (senha, nome, pagamento, observacao, total) 
            VALUES( $1, $2, $3, $4, $5)
            RETURNING id `,
      [senha, nome, pagamento, observacao, total],
    );

    const pedidoId = resultadoPedido.rows[0].id;

    for (const item of itens) {
      await pool.query(
        `INSERT INTO itens_pedido (pedido_id, nome, quantidade, preco)
                VALUES ($1, $2, $3, $4)`,
        [pedidoId, item.nome, item.quantidade, item.preco],
      );
    }
    await pool.query("COMMIT");
    res.status(201).json({ mensagem: "Pedido criado com sucesso!", pedidoId });
  } catch (err) {
    await pool.query("ROLLBACK");
    console.error(err);
    res.status(500).json({ erro: "Erro ao criar pedido" });
  }
});


router.get("/", autenticar, async (req, res) => {
    try {
        const resultadoPedidos = await pool.query(
            `SELECT * FROM pedidos ORDER BY criado_em DESC`
        );

        const pedidos = await Promise.all(
            resultadoPedidos.rows.map(async(pedido) => {
                const resultadoItens = await pool.query (
                    `SELECT * FROM itens_pedido WHERE pedido_id = $1`,
                    [pedido.id]
                );
                return {
                    ...pedido,
                    itens: resultadoItens.rows,
                };
            })
        );

        res.json(pedidos);
        
    } catch (err) {
        console.error(err);
        res.status(500).json({erro: "Erro ao buscar pedidos"});

    }
});

router.patch("/:id/status", autenticar, async (req, res) => {
  const { id } = req.params;

  const { status } = req.body;

  const statusValidos = ["recebido", "em preparo", "pronto"];

  if (!statusValidos.includes(status)) {
    return res.status(400).json({ erro: "Status inválido" });
  }

  try {
    await pool.query(
      `UPDATE pedidos SET status = $1 WHERE id = $2`,
      [status, id]
    );

    res.json({ mensagem: "Status atualizado!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao atualizar status" });
  }
});

module.exports = router;