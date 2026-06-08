import { useState } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import styled from "styled-components";

function Admin() {
  const [pedidos, setPedidos] = useState(() => {
    const salvo = localStorage.getItem("pedidos"); //Tentando buscar a lista de pedidos salva no localStorage
    return salvo ? JSON.parse(salvo) : []; //Se existir, converte de JSON para array e se não, retorna array vazio
  });

  function atualizaStatus(senha, novoStatus) {
    //ela percorre todos os pedidos e atualiza só o que tem aquela senha.
    const pedidosAtualizados = pedidos.map((pedido) => {
      if (pedido.senha === senha) {
        return { ...pedido, status: novoStatus };
      } //... pedido copia tudo, e status substitui o valor antigo
      return pedido; //os demais ficam iguais
    });
    setPedidos(pedidosAtualizados);
    localStorage.setItem("pedidos", JSON.stringify(pedidosAtualizados));
  }

  return (
    <>
      <Navbar />
      <Corpo>
        <Titulo>Painel Admin 🎂 </Titulo>

        {pedidos.length === 0 && <Vazio> Nenhum pedido recebido ainda. </Vazio>}

        <ListaPedidos>
          {pedidos.map((pedido) => (
            <CardPedido key={pedido.senha}>
              <CabecalhoCard>
                <Senha>#{String(pedido.senha).padStart(3, "0")}</Senha>
                <StatusBadge status={pedido.status || "recebido"}>
                  {pedido.status || "recebido"}
                </StatusBadge>
                <Nome>{pedido.nome}</Nome>
              </CabecalhoCard>

              {/* Lista os itens do pedido */}
              {pedido.itens.map((item) => (
                <ItemLinha key={item.id}>
                  <span>{item.nome}</span>
                  <span>x{item.quantidade}</span>
                </ItemLinha>
              ))}

              <TotalPedido>Total: R$ {pedido.total.toFixed(2)}</TotalPedido>
              <Pagamento>Pagamento: {pedido.pagamento}</Pagamento>

              {/* Mostra observação só se existir */}
              {pedido.observacao && <Obs>Obs: {pedido.observacao}</Obs>}

              {/* Botões de status */}
              <BotoesStatus>
                <BotaoStatus
                  ativo={pedido.status === "recebido"}
                  onClick={() => atualizarStatus(pedido.senha, "recebido")}
                >
                  Recebido
                </BotaoStatus>

                <BotaoStatus
                  ativo={pedido.status === "em preparo"}
                  onClick={() => atualizarStatus(pedido.senha, "em preparo")}
                >
                  Em preparo
                </BotaoStatus>

                <BotaoStatus
                  ativo={pedido.status === "pronto"}
                  onClick={() => atualizarStatus(pedido.senha, "pronto")}
                >
                  Pronto ✓
                </BotaoStatus>
              </BotoesStatus>
            </CardPedido>
          ))}
        </ListaPedidos>
      </Corpo>

      <Footer />
    </>
  );
}

export default Admin;

const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fff8f3, #faf3e0);
  font-family: "Nunito", sans-serif;
  padding: 184px 20px;
`;

const Titulo = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #3e2723;
`;

const Vazio = styled.p`
  font-size: 16px;
  color: #a89b94;
`;

const ListaPedidos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 560px;
`;

const CardPedido = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  border: 1px solid #f1e4e8;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CabecalhoCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Senha = styled.span`
  font-size: 24px;
  font-weight: 800;
  color: #f56b8a;
`;

const Nome = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #3e2723;
`;

const ItemLinha = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: #6b4f4f;
  padding: 4px 0;
  border-bottom: 1px dashed #f1e4e8;
`;

const TotalPedido = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #3e2723;
  text-align: right;
  margin-top: 4px;
`;

const Pagamento = styled.p`
  font-size: 14px;
  color: #a89b94;
`;

const Obs = styled.p`
  font-size: 14px;
  color: #a89b94;
  font-style: italic;
`;

const BotoesStatus = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const BotaoStatus = styled.button`
  flex: 1;
  padding: 8px;
  border-radius: 10px;
  border: 1.5px solid #f1e4e8;
  font-size: 13px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  /* A prop "ativo" muda as cores do botão selecionado */
  background: ${(props) => (props.ativo ? "#f56b8a" : "#fff")};
  color: ${(props) => (props.ativo ? "#fff" : "#a89b94")};
  border-color: ${(props) => (props.ativo ? "#f56b8a" : "#f1e4e8")};

  &:hover {
    border-color: #f56b8a;
    color: ${(props) => (props.ativo ? "#fff" : "#f56b8a")};
  }
`;

const StatusBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  text-transform: capitalize;

  background: ${({ status }) =>
    status === "pronto"
      ? "#e8f5e9"
      : status === "em preparo"
        ? "#fff3e0"
        : "#fce4ec"};

  color: ${({ status }) =>
    status === "pronto"
      ? "#2e7d32"
      : status === "em preparo"
        ? "#e65100"
        : "#c2185b"};
`;
