import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Pedido from "./pages/Pedido";
import { useState } from "react";
import Carrinho from "./pages/Carrinho";


function App() {
    const [carrinho, setCarrinho] = useState([]);


  return (
    <Routes>
      <Route path="/" element={<Home carrinho={carrinho}
            setCarrinho={setCarrinho}/>}/>
      <Route path="/checkout" element={<Checkout  carrinho={carrinho}/>}/>
      <Route path="/pedido"element={<Pedido/>}/>
      <Route path="/carrinho" element={<Carrinho/>}/>
    </Routes>

    
  );
}

export default App;

