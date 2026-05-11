import { MinusIcon, PlusIcon, ShoppingCartIcon, TrashIcon } from "@phosphor-icons/react";
import styled from "styled-components";

function Carrinho({
  carrinho,
  total,
  adicionarAoCarrinho,
  diminuirQuantidade,
  removerDoCarrinho,
}) {
  return (
    <Caixa>
      <Titulo>
        <ShoppingCartIcon size={20} />
        <h2>Carrinho</h2>
      </Titulo>

      {carrinho.length === 0 ? (
        <Texto>Seu carrinho está vazio</Texto>
      ) : (
        carrinho.map((item) => (
          <Produto key={item.id}>

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
        <p>
        Total: 
        </p>
        <p>
          R$ {total.toFixed(2)}
        </p>
      </Total>
        
    </Caixa>
  );
}

export default Carrinho;

const Caixa = styled.div`
  width: 80vw;
  margin: 10px;
  gap: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const Titulo = styled.div`
  display: flex;
  padding: 10px;

  & > h2 {
    padding: 5px;
    font-size: 20px;
    color: #3e2723;
    font-weight: 400;
  }
`;

const Texto = styled.p`
  padding: 20px;
  color: #6b4f4f;
`;

const Total = styled.h3`
   display: flex;
   align-items: center;
   justify-content: space-between;
  color: #6b4f4f;
  font-weight:500;
  border-top: 1px solid #3e272399;
  font-weight: 500;
  width: 80%;
  padding: 15px;
  /* background-color: red; */
  overflow: hidden;
  `;

const Produto = styled.div`
  width: 80%;
  padding-bottom: 5px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  
`

const InfoProduto = styled.div`
  padding: 2px 20px;

  &>h3{
    color:#5c4033;
    font-weight: 700;
  }

  &>p{
    padding-top: 5px;
    font-size: 15px;
     color: #6b4f4f;
  }
  
`
const AdicionaProduto = styled.div`
display: flex;
align-items: center;

`
const Quantidade = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;


  &>span{
    background-color: #fdf9f7;
    padding: 3px;
    font-size: 20px;
     flex: 1;
    
  }
  
  &>button{
    font-size: 20px;
    border: 1px solid #d8cfc9;
    /* border-radius: 16px; */
    padding: 3px;

    cursor: pointer;

    background-color: #fdf9f7;
  }
`
const Remove = styled.button`
  border: none;
  background: transparent;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #5c4033;
  font-size: 20px;
`
