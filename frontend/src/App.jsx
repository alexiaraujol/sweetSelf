import { produtos } from "./data/produtos";
import Produto from "./components/Produto";
import { useState } from "react";
import Carrinho from "./components/Carrinho";
import styled from "styled-components";
import Navbar from "./components/Navbar";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase()),
  );

  const quantidadeTotal = carrinho.reduce(
    (acc, item) => acc + item.quantidade,
    0,
  );
  function adicionarAoCarrinho(produto) {
    // procura se o produto já existe já existe
    const produtoExistente = carrinho.find((item) => item.id === produto.id);

    // se o produto existir
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
    const novoCarrinho = carrinho.filter((item) => item.id !== id);

    setCarrinho(novoCarrinho);
  }

  function diminuirQuantidade(id) {
    const produtoExistente = carrinho.find((item) => item.id === id);

    // se quantidade for maior que 1
    if (produtoExistente.quantidade > 1) {
      const novoCarrinho = carrinho.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantidade: item.quantidade - 1,
          };
        }

        return item;
      });

      setCarrinho(novoCarrinho);
    } else {
      // remove item do carrinho
      const novoCarrinho = carrinho.filter((item) => item.id !== id);

      setCarrinho(novoCarrinho);
    }
  }

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0,
  );

  return (
    <>
      <Navbar busca={busca} setBusca={setBusca} />

      <Conteudo>
        <ListadeProdutos>
          {produtosFiltrados.map((produto) => (
            <Produto
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
              descricao={produto.descricao}
              onAdicionar={() => adicionarAoCarrinho(produto)}
            />
          ))}
        </ListadeProdutos>

        <Carrinho
          carrinho={carrinho}
          total={total}
          adicionarAoCarrinho={adicionarAoCarrinho}
          diminuirQuantidade={diminuirQuantidade}
          removerDoCarrinho={removerDoCarrinho}
          quantidadeTotal={quantidadeTotal}
        />
      </Conteudo>
    </>
  );
}

export default App;
const Conteudo = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;

background: linear-gradient(
  to bottom,
  #fff8f3,
  #faf3e0
);

  font-family: "Nunito", sans-serif;

  min-height: 100vh;

  padding: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ListadeProdutos = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
