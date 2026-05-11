import styled from "styled-components";
import logo from "../assets/logo.png";
import { MagnifyingGlassIcon, ShoppingCartIcon } from "@phosphor-icons/react";

function Navbar() {
  return (
    <Topo>
      <Logo>
        <Imagem src={logo} alt="" />
        <Texto>
          <p>Sweet</p>
          <p>Self</p>
        </Texto>
      </Logo>
      <Comandos>
        <Buscar>
          <Input type="text" placeholder="buscar item..." />
          <BotaoBusca>
            <MagnifyingGlassIcon size={20} />
          </BotaoBusca>
        </Buscar>
        <Carrinho>
          <ShoppingCartIcon size={20} />
          <p>Carrinho</p>
        </Carrinho>
      </Comandos>
    </Topo>
  );
}

export default Navbar;

const Topo = styled.div`
  background-color: #f7cad0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Comandos = styled.div`
  display: flex;
  align-items: center;
`;

const Buscar = styled.div`
  display: flex;
  align-items: center;

  width: 320px;
  padding: 12px 16px;

  border: 1px solid #d8cfc9;
  border-radius: 16px;

  background-color: #fdf9f7;
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

const Carrinho = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #fdf9f7;
  margin-left: 5px;

  &>p{
    color: #5c4033;
    font-size: 20px;
    font-weight: 550;
    padding: 3px;
  }

  border: 1px solid #d8cfc9;
  border-radius: 16px;
  padding: 12px 16px;

    cursor: pointer;
    

`;

const Logo = styled.div`
  display: flex;
`;

const Imagem = styled.img`
  width: 90px;
  /* background-color: red; */
`;

const Texto = styled.div`
  /* background-color: green; */
  color: #64240c;
  font-family: "Cherry Bomb One", system-ui;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 35px;
  padding: 5px;
  text-align: center;
`;
