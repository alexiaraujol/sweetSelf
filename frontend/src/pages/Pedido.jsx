// pages/Confirmacao.jsx
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

function Confirmacao() {
  const { pedidoFinalizado } = useContext(CartContext);
  const navigate = useNavigate();

  // Proteção: se alguém acessar /confirmacao sem ter feito pedido,
  // mostra uma mensagem em vez de quebrar a página
  if (!pedidoFinalizado) {
    return (
      <>
      <Navbar />
      <CorpoVazio>

        <PedidoNEncontrado>
        <p>Nenhum pedido encontrado.</p>
        <Botao onClick={() => navigate("/")}>Voltar ao início</Botao>

        </PedidoNEncontrado>
      </CorpoVazio>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Corpo>
        <Card>
          <Emoji>🎉</Emoji>
          <h1>Pedido realizado!</h1>

          <SenhaContainer>
            <p>Sua senha é</p>
            {/* padStart garante 3 dígitos: senha 5 vira "005" */}
            <Senha>#{String(pedidoFinalizado.senha).padStart(3, "0")}</Senha>
          </SenhaContainer>

          <Divider />

          <InfoLinha>
            <span>Nome</span>
            <span>{pedidoFinalizado.nome}</span>
          </InfoLinha>

          <InfoLinha>
            <span>Pagamento</span>
            <span>{pedidoFinalizado.pagamento}</span>
          </InfoLinha>

          <InfoLinha>
            <span>Total</span>
            <span>R$ {pedidoFinalizado.total.toFixed(2)}</span>
          </InfoLinha>

          <Divider />

          <h2>Itens do pedido</h2>
          {pedidoFinalizado.itens.map((item) => (
            <InfoLinha key={item.id}>
              <span>{item.nome}</span>
              <span>x{item.quantidade}</span>
            </InfoLinha>
          ))}

          {pedidoFinalizado.observacao && (
            <Observacao>
              Obs: {pedidoFinalizado.observacao}
            </Observacao>
          )}

          <Botao onClick={() => navigate("/")}>Fazer novo pedido</Botao>
        </Card>
      </Corpo>
      <Footer/>
    </>
  );
}

export default Confirmacao;

const Corpo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fff8f3, #faf3e0);
  font-family: "Nunito", sans-serif;
  padding: 40px 20px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 480px;
  background: #fff;
  border-radius: 24px;
  padding: 36px 32px;
  border: 1px solid #f1e4e8;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  gap: 12px;

  h1 {
    font-size: 22px;
    font-weight: 700;
    color: #3e2723;
    text-align: center;
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: #5c4033;
    margin-top: 4px;
  }
`;

const Emoji = styled.p`
  font-size: 48px;
  text-align: center;
`;

const SenhaContainer = styled.div`
  background: #fff0f5;
  border-radius: 16px;
  padding: 20px;
  text-align: center;

  p {
    font-size: 14px;
    color: #a89b94;
    margin-bottom: 4px;
  }
`;

const Senha = styled.p`
  font-size: 52px;
  font-weight: 800;
  color: #f56b8a;
  letter-spacing: 4px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px dashed #f1e4e8;
  margin: 4px 0;
`;

const InfoLinha = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: #6b4f4f;
`;

const Observacao = styled.p`
  font-size: 14px;
  color: #a89b94;
  font-style: italic;
`;

const Botao = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 8px;
  border: none;
  border-radius: 16px;
  background: linear-gradient(135deg, #f56b8a, #ff8fab);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(255,111,145,0.3);

  &:hover { transform: translateY(-2px); }
  &:active { transform: scale(0.98); }
`;

const PedidoNEncontrado = styled.div`
  width: 100%;
  max-width: 480px;
  background: #fff;
  border-radius: 24px;
  padding: 36px 32px;
  border: 1px solid #f1e4e8;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  gap: 12px;
  

  p{
    font-size: 22px;
    font-weight: 700;
    color: #3e2723;
    text-align: center;
  }
  
`


const CorpoVazio = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fff8f3, #faf3e0);
  font-family: "Nunito", sans-serif;
  padding: 24px 20px;
`;