import styled from "styled-components";

function Produto({ nome, preco, imagem, onAdicionar }) {
  return (
    <Caixa>
      <Foto src={imagem} alt={nome} />
      <Texto>
        <h2>{nome}</h2>
        <p>Descrição</p>

        <PrecoAdicionar>
        <h3>R${preco.toFixed(2)}</h3>
        <Botao onClick={onAdicionar}>+</Botao>
        </PrecoAdicionar>
      </Texto>
    </Caixa>
  );
}

export default Produto;

const Caixa = styled.div`
  width: 260px;
  

  background-color: #fff;

  border-radius: 20px;

  overflow: hidden;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);

  font-family: "Nunito", sans-serif;
  margin: 10px;
`;

const Foto = styled.img`
  width: 100%;

  object-fit: cover;
`;

const Texto = styled.div`
  padding: 18px;

  & > h2 {
    color: #3e2723;

    font-size: 18px;
    font-weight: 700;

    margin-bottom: 10px;
  }

  & > p {
    color: #8d6e63;

    font-size: 15px;
    line-height: 1.4;

    margin-bottom: 20px;
  }
`;

const PrecoAdicionar = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  & > h3 {
    color: #3e2723;

    font-size: 20px;
    font-weight: 800;
  }
`;

const Botao = styled.button`
  width: 50px;
  height: 50px;

  border: none;
  border-radius: 50%;

  background-color: #ff6f91;

  color: white;

  font-size: 30px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;