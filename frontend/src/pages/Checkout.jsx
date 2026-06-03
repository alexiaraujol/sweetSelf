import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

function Checkout() {
  const { carrinho, total, finalizarPedido } = useContext(CartContext);
  //primeiro devemos criar os estados para guardae as informações necessárias para o /checkout
  const [nome, setNome] = useState("");
  const [observacao, setObservacao] = useState("");
  const [pagamento, setPagamento] = useState("");
  const[erro, setErro] = useState(""); //estado para mensagem de erro; 
  
  const navigate = useNavigate();

  function handleFinalizar(){
     
    if(carrinho.length === 0){
        setErro("Seu carrinho esta vazio");
        return
    }

    if(!nome.trim()){ //.trim() tira todos os espaços em branco; 
      setErro("Por favor, informe o seu nome!");
      return
    }

    if(!pagamento){
      setErro("Informe a forma de pagamento!");
      return
    }

    setErro("");
    finalizarPedido(nome, pagamento, observacao);
    navigate("/pedido"); 

  }

  return (
    <>
      <Navbar />

      <Corpo>
        <ContainerInfoProduto>
          <h1> Resumo do Pedido </h1>

          {carrinho.map((item) => (
            <ItemPedido key={item.id}>
              <span>{item.nome}</span>
              <span>x{item.quantidade}</span>
            </ItemPedido>
          ))}

          <Total>Total: R$ {total.toFixed(2)}</Total>
        </ContainerInfoProduto>

        <ContainerInfoCliente>
          <Campo>
            <Label>Nome</Label>
            <Input
              type="text"
              placeholder="Digite seu nome..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Campo>

          <Campo>
            <Label>Pagamento</Label>
            <Select
              value={pagamento}
              onChange={(e) => setPagamento(e.target.value)}
            >
              <option value="">Escolha pagamento</option>
              <option value="pix">Pix</option>
              <option value="cartao">Cartão</option>
              <option value="dinheiro">Dinheiro</option>
            </Select>
          </Campo>

          <Campo>
            <Label>Observação</Label>
            <Textarea
              placeholder="Observações do pedido"
              value={observacao}
              onChange={(e) => setObservacao(e.target.value)}
            />
          </Campo>

          {erro && <p style={{ color: "red", fontSize: "14px" }}>{erro}</p>}

          <FinalizarPedido onClick={handleFinalizar}>Finalizar Pedido</FinalizarPedido>
        </ContainerInfoCliente>
      </Corpo>

      <Footer/>

    </>
  );
}

export default Checkout;

const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;
  background: linear-gradient(to bottom, #fff8f3, #faf3e0);
  font-family: "Nunito", sans-serif;
  min-height: 100vh;
  padding: 40px 20px;
  margin-top: 129px;
`;

const ContainerInfoProduto = styled.div`
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #f1e4e8;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    width: 80vw;
  }

  & > h1 {
    font-size: 22px;
    font-weight: 700;
    color: #3e2723;
    text-align: center;
    margin-bottom: 8px;
  }
`;

const ItemPedido = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #6b4f4f;
  padding: 6px 0;
  border-bottom: 1px dashed #f1e4e8;
`;

const Total = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #3e2723;
  text-align: right;
  margin-top: 8px;
`;

const ContainerInfoCliente = styled.div`
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #f1e4e8;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;
const Label = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #5c4033;
  margin: 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #f1e4e8;
  border-radius: 10px;
  font-size: 15px;
  font-family: "Nunito", sans-serif;
  color: #5c4033;
  background: #fffaf9;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;

  &::placeholder { color: #a89b94; }
  &:focus { border-color: #f56b8a; }
`;


const Select = styled.select`
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #f1e4e8;
  border-radius: 10px;
  font-size: 15px;
  font-family: "Nunito", sans-serif;
  color: #5c4033;
  background: #fffaf9;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus { border-color: #f56b8a; }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 90px;
  padding: 10px 14px;
  border: 1.5px solid #f1e4e8;
  border-radius: 10px;
  font-size: 15px;
  font-family: "Nunito", sans-serif;
  color: #5c4033;
  background: #fffaf9;
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &::placeholder { color: #a89b94; }
  &:focus { border-color: #f56b8a; }
`;

const FinalizarPedido = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 16px;
  background: linear-gradient(135deg, #f56b8a, #ff8fab);
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(255,111,145,0.3);
  margin-top: 4px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(255,111,145,0.4);
  }
  &:active { transform: scale(0.98); }
`;
