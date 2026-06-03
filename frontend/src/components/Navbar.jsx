import styled from "styled-components";
import logo from "../assets/logo.png";
import perfil from "../assets/perfil.jpg";
import { MagnifyingGlassIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar({ busca, setBusca, quantidadeTotal }) {
  return (
    <Topo>
      <Logo to ="/">
        <Imagem src={logo} alt="Logo do site, um cupcake de chocolate" />
        <Texto>
          <p>Sweet</p>
          <p>Self</p>
        </Texto>
      </Logo>
      {/* <div>
        <img src={perfil} />
      </div> */}
      <Comandos>
        <Buscar>
          <Input
            type="text"
            placeholder="buscar item..."
            onChange={(e) => setBusca(e.target.value)}
          />
          <BotaoBusca>
            <MagnifyingGlassIcon size={20} />
          </BotaoBusca>
        </Buscar>
        <Carrinho to ="/carrinho">
          <ShoppingCartIcon size={20} />
          <p>Carrinho {quantidadeTotal}</p>
        </Carrinho>
      </Comandos>
    </Topo>
  );
}

export default Navbar;

const Topo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 25px;

  background: linear-gradient(to right, #f7cad0, #fde2e4);
  min-height: 60px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;


  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    flex-direction: column;
    gap:0px;
    padding: 4px 20px;
    padding-bottom: 10px;
  }
`;

const Comandos = styled.div`
  display: flex;
  align-items: center;
`;

const Buscar = styled.div`
  display: flex;
  align-items: center;
 margin-right: 5px;
  width: 280px;
  padding: 12px 16px;

  border: 1px solid #d8cfc9;
  border-radius: 16px;

  background-color: #fdf9f7;

  transition: 0.2s;

  &:hover {
    border-color: #ff6f91;
  }

  &:focus-within {
    border-color: #ff6f91;
    box-shadow: 0 0 0 4px rgba(255, 111, 145, 0.15);
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const Input = styled.input`
  flex: 1;
 

  border: none;
  outline: none;

  background: transparent;

  font-size: 20px;
  font-family: "Nunito", sans-serif;

  color: #5c4033;

  &::placeholder {
    color: #a89b94;
  }

  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const BotaoBusca = styled.button`
  border: none;
  background: transparent;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #5c4033;
  font-size: 20px;
`;

const Carrinho = styled(Link)`
   display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 18px;
  background-color: #fff;
  border: 1px solid #f1d8dd;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  text-decoration: none;

  cursor: pointer;

  transition: 0.2s;
  &:hover {
    transform: translateY(-2px);
  }

  & > p {
    font-size: 18px;
    font-weight: 700;
    color: #5c4033;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  display: flex;
  /* gap: 6px; */
  align-items: center;
  text-decoration: none;

`;

const Imagem = styled.img`
  width: 90px;
  /* background-color: red; */

    @media (max-width: 768px) {
   width: 60px;
  }
`;

const Texto = styled.div`
  /* background-color: green; */
  color: #64240c;
  font-family: "Cherry Bomb One", system-ui;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 30px;
  line-height: 1;
  padding: 4px;
  text-align: center;
  @media (max-width: 768px) {
     font-size: 24px;
  }  
`;
