import styled from "styled-components";

function Produto({ nome, preco, imagem, onAdicionar }) {
  return (
    <Caixa>
      <Foto src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>R${preco.toFixed(2)}</p>

      <button onClick={onAdicionar}>Adicionar</button>
    </Caixa>
  );
}

export default Produto;

const Caixa = styled.div`
  border: 1px solid #000000;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
`;

const Foto = styled.img`
  width: 70px;
`;
