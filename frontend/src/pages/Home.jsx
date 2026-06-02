import { produtos } from "../data/produtos";
import Produto from "../components/Produto";
import { useContext, useState } from "react";
import Carrinho from "../components/Carrinho";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

function Home() {
  const { adicionarAoCarrinho } = useContext(CartContext);
  const [busca, setBusca] = useState("");
  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase()),
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
        />
      </Conteudo>
    </>
  );
}

export default Home;

const Conteudo = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;

  background: linear-gradient(to bottom, #fff8f3, #faf3e0);

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
