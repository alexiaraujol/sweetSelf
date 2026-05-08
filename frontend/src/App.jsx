import { produtos } from "./data/produtos";
import Produto from "./components/Produto";
import { useState } from "react";

function App() {

  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {

    // procura se já existe
    const produtoExistente = carrinho.find(
      (item) => item.id === produto.id
    );

    // se existir
    if (produtoExistente) {

      const novoCarrinho = carrinho.map((item) => {

        if (item.id === produto.id) {

          return {
            ...item,
            quantidade: item.quantidade + 1,
          };
        }

        return item;
      });

      setCarrinho(novoCarrinho);

    } else {

      // se não existe adiciona produto novo
      setCarrinho([
        ...carrinho,
        {
          ...produto,
          quantidade: 1,
        },
      ]);
    }
  }

  function removerDoCarrinho(id) {

    const novoCarrinho = carrinho.filter(
      (item) => item.id !== id
    );

    setCarrinho(novoCarrinho);
  }

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Autoatendimento</h1>

      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          imagem={produto.imagem}
          onAdicionar={() => adicionarAoCarrinho(produto)}
        />
      ))}

      <h2>Carrinho</h2>

      {carrinho.length === 0 ? (

        <p>Seu carrinho está vazio</p>

      ) : (

        carrinho.map((item) => (

          <div key={item.id}>

            <p>
              {item.nome} -
              Quantidade: {item.quantidade} -
              R$ {(item.preco * item.quantidade).toFixed(2)}
            </p>

            <button onClick={() => removerDoCarrinho(item.id)}>
              Remover item
            </button>

          </div>
        ))
      )}

      <h3>Total: R$ {total.toFixed(2)}</h3>

    </div>
  );
}

export default App;