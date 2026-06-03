import { produtos } from "../data/produtos";
import Produto from "../components/Produto";
import { useContext, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { useNavigate  } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Footer } from "../components/Footer";

function Home() {
  const navigate = useNavigate();
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
      </Conteudo>
        <Footer/>
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

  min-height: calc(100vh - 60px - 68px);

  padding: 30px;
      margin-top: 161px;
    margin-bottom: 61px;

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
const FinalizarPedido = styled.button`
  width: 80%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: none;
  border-radius: 16px;

  background: linear-gradient(135deg, #f56b8a, #ff8fab);

  color: #fff;
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  text-decoration: none;

  cursor: pointer;

  transition: all 0.2s ease;

  box-shadow: 0 4px 12px rgba(255, 111, 145, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(255, 111, 145, 0.4);
  }

  &:active {
    transform: scale(0.98);
  }

@media (min-width: 768px) {
    display: none;
  }

`;