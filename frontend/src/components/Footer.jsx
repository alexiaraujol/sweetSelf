import { HouseIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react";
import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export function Footer() {
  const [active, setActive] = useState("home");
  const navigate = useNavigate()
  const {quantidadeTotal} = useContext(CartContext)

  return (
    <Rodape>
      <NavItem active={active === "home"} onClick={() => setActive("home")} onClick={() => navigate("/")}>
        <HouseIcon size={24} weight={active === "home" ? "fill" : "regular"} />
        <Label>Início</Label>
      </NavItem>

      <NavItem active={active === "search"} onClick={() => setActive("search")}>
        <MagnifyingGlassIcon size={24} weight={active === "search" ? "fill" : "regular"} />
        <Label>Buscar</Label>
      </NavItem>

      <NavItem active={active === "cart"} onClick={() => setActive("cart")} onClick={() => navigate("/carrinho")}>
        <CartWrapper>
          <ShoppingCartIcon size={24} weight={active === "cart" ? "fill" : "regular"} />
          <Badge>{quantidadeTotal}</Badge>
        </CartWrapper>
        <Label>Carrinho</Label>
      </NavItem>

      <NavItem active={active === "profile"} onClick={() => setActive("profile")}>
        <UserIcon size={24} weight={active === "profile" ? "fill" : "regular"} />
        <Label>Perfil</Label>
      </NavItem>
    </Rodape>
  );
}

const Rodape = styled.nav`
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding: 0 8px;
  padding-bottom: env(safe-area-inset-bottom, 4px);

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

@media (min-width: 768px) {
    display: none;
  }

`;

const NavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 6px 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  color: ${({ active }) => (active ? "#64240c" : "#b0916e")};
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: rgba(100, 36, 12, 0.06);
  }
`;

const Label = styled.span`
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

const CartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background: #64240c;
  color: #fff;
  font-size: 9px;
  font-weight: 600;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


// background: linear-gradient(to bottom, #fff8f3, #faf3e0);
// color: linear-gradient(135deg, #f56b8a, #ff8fab);