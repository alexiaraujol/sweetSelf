import { produtos } from "./data/produtos";
import Produto from "./components/Produto";
import { useState } from "react";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto){
    setCarrinho([...carrinho,produto]);

  }
  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Autoatendimento</h1>

      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          imagem={produto.imagem}
          onAdicionar={() => adicionarAoCarrinho(produto)}
        />
      ))}

      <h2>Carrinho</h2>
      
      {carrinho.length === 0 ? (
        <p>Seu carrinho esta vazio</p>
      ): (
        carrinho.map((item,index) => (
          <p key={index}>
            {item.nome} - R${item.preco.toFixed(2)}
          </p>
        ))
      )}
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}

export default App;