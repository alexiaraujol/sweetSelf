import {
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

function Carrinho() {
  const {
    carrinho,
    adicionarAoCarrinho,
    total,
    diminuirQuantidade,
    removerDoCarrinho,
  } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <Corpo>
        <Caixa>
          <Titulo>
            <ShoppingCartIcon size={20} />
            <h2>Carrinho</h2>
          </Titulo>

          {carrinho.length === 0 ? (
            <Texto>
              <p>🧁 Seu carrinho está vazio</p>
              <p>Adicione doces deliciosos!</p>
            </Texto>
          ) : (
            carrinho.map((item) => (
              <Produto key={item.id}>
                {<Imagem src={item.imagem} />}
                <InfoProduto>
                  <h3>{item.nome}</h3>
                  <p>R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                </InfoProduto>

                <AdicionaProduto>
                  <Quantidade>
                    <button onClick={() => diminuirQuantidade(item.id)}>
                      <MinusIcon size={20} />
                    </button>

                    <span>{item.quantidade}</span>

                    <button onClick={() => adicionarAoCarrinho(item)}>
                      <PlusIcon size={20} />
                    </button>
                  </Quantidade>

                  <Remove onClick={() => removerDoCarrinho(item.id)}>
                    <TrashIcon size={20} />
                  </Remove>
                </AdicionaProduto>
              </Produto>
            ))
          )}

          <Total>
            <p>Total:</p>
            <p>R$ {total.toFixed(2)}</p>
          </Total>
          <FinalizarPedido to="/checkout">
            Finalizar Pedido
            <div>
              <ArrowRightIcon size={20} weight="bold" />
            </div>
          </FinalizarPedido>
        </Caixa>
      </Corpo>
      <Footer/>
    </>
  );
}

export default Carrinho;
const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: linear-gradient(to bottom, #fff8f3, #faf3e0);
  font-family: "Nunito", sans-serif;
  min-height: 100vh;
  padding: 40px 20px;
  margin-top: 129px;
`;
const Caixa = styled.div`
  width: 50vw;
  margin: 10px;
  gap: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #f1e4e8;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const Titulo = styled.div`
  display: flex;
  padding: 10px;

  & > h2 {
    font-size: 24px;
    font-weight: 700;
    color: #3e2723;
  }
`;

const Texto = styled.p`
  padding: 20px;
  color: #6b4f4f;
`;

const Total = styled.h3`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #6b4f4f;
  font-weight: 500;
  font-weight: 800;
  width: 80%;
  padding: 15px;
  /* background-color: red; */
  overflow: hidden;
  background: #fff8f3;
  border-radius: 14px;
`;

const Produto = styled.div`
  width: 80%;
  padding-bottom: 5px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;

  padding: 14px 0;
  border-bottom: 1px solid #f1e4e8;

  &:last-child {
    border-bottom: none;
  }
`;

const InfoProduto = styled.div`
  padding: 2px 20px;

  & > h3 {
    color: #5c4033;
    font-weight: 700;
  }

  & > p {
    padding-top: 5px;
    font-size: 15px;
    color: #6b4f4f;
  }
`;

const Imagem = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;

  border-radius: 14px;
`;

const AdicionaProduto = styled.div`
  display: flex;
  align-items: center;
`;
const Quantidade = styled.div`
  display: flex;
  align-items: center;

  overflow: hidden;

  border-radius: 12px;

  border: 1px solid #eadede;

  background: #fff;

  & > span {
    width: 36px;

    text-align: center;

    font-weight: 600;
  }

  & > button {
    width: 36px;
    height: 36px;

    border: none;

    background: #fff8f3;

    font-size: 18px;

    transition: 0.2s;

    &:hover {
      background: #f7cad0;
    }
  }
`;
const Remove = styled.button`
  border: none;
  background: transparent;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #5c4033;
  font-size: 20px;

  transition: 0.2s;

  &:hover {
    color: #ff6f91;
    transform: scale(1.1);
  }
`;
const FinalizarPedido = styled(Link)`
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
`;
