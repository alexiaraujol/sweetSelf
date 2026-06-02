import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  const [pedidoFinalizado, setPedidoFinalizado] = useState(null); //Ele vai guardar {senha, nome, pagamento, itens, total}

  function adicionarAoCarrinho(produto) {
    // procura se o produto já existe já existe
    const produtoExistente = carrinho.find((item) => item.id === produto.id);

    // se o produto existir
    if (produtoExistente) {
      const novoCarrinho = carrinho.map((item) => {
        if (item.id === produto.id) {
          return {
            ...item,
            quantidade: item.quantidade + 1,
          };
        }

        return item;
      });

      setCarrinho(novoCarrinho);
    } else {
      // se não existe adiciona produto novo
      setCarrinho([
        ...carrinho,
        {
          ...produto,
          quantidade: 1,
        },
      ]);
    }
  }

  function removerDoCarrinho(id) {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);

    setCarrinho(novoCarrinho);
  }

  function diminuirQuantidade(id) {
    const produtoExistente = carrinho.find((item) => item.id === id);

    // se quantidade for maior que 1
    if (produtoExistente.quantidade > 1) {
      const novoCarrinho = carrinho.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantidade: item.quantidade - 1,
          };
        }

        return item;
      });

      setCarrinho(novoCarrinho);
    } else {
      // remove item do carrinho
      const novoCarrinho = carrinho.filter((item) => item.id !== id);

      setCarrinho(novoCarrinho);
    }
  } 

  function finalizarPedido(nome, pagamento, observacao) {
    //Primeiro deve gerar um numero aleatório entre 1 e 999;
    //Para isso se usa o Math.random()
    //O Math.ceil, multiplica por 999 e arredonda o número para cima
    const senha = Math.ceil(Math.random() * 999);

    //Monta o objeto que vai ter o pedido dentro;
    const pedido = {
      senha,
      nome,
      pagamento,
      observacao,
      itens: carrinho, //copia os itens do carrinho
      total, // copia o total
    };

    setPedidoFinalizado(pedido);
    setCarrinho([]); //Limpa o carrinho assim que finalizar o pedido; 
  }

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0,
  );

  const quantidadeTotal = carrinho.reduce(
    (acc, item) => acc + item.quantidade,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        total,
        removerDoCarrinho,
        diminuirQuantidade,
        quantidadeTotal,
        finalizarPedido,
        pedidoFinalizado
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
