import styled from "styled-components";

function Produto({ nome, preco, imagem, descricao, onAdicionar }) {
  return (
    <Caixa>
      <Foto src={imagem} alt={nome} />
      <Texto>
        <h2>{nome}</h2>
        <p>{descricao}</p>

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

  transition: 0.3s;

&:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
  
 @media (max-width: 768px) {
    width:80vw;
  }
  
`;

const Foto = styled.img`
  width: 100%;

  object-fit: cover;
`;

const Texto = styled.div`
  padding: 16px;
  gap: 8px;

  & > h2 {
    font-size: 16px;
    font-weight: 700;
    color: #5c3a21;
  }

  & > p {
    font-size: 12px;
    color: #9b8b8b;
    line-height: 1.4;

    margin-bottom: 20px;
  }
`;

const PrecoAdicionar = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  & > h3 {
    font-size: 20px;
    font-weight: bold;
    color: #ff6f91;
  }
`;

const Botao = styled.button`
  width: 50px;
  height: 50px;

  border: none;
  border-radius: 50%;

  background-color: #f56b8a;

  color: white;

  font-size: 30px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
