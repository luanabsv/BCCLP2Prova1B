import GradeProdutos from "./componentes/GradeProdutos";
import TabelaCarrinho from "./componentes/TabelaCarrinho";
import BarraBusca from "./templates/BarraBusca";
import Cabecalho from "./templates/Cabecalho";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      }); 
  },[]);



  const [produtos, setProdutos] = useState([]);
  const [exibirLista, setExibirLista] = useState(true);
  const [listaCarrinho, setListaCarrinho] = useState([]);

    return (
    <div className="App">
      <Cabecalho/>
      <BarraBusca setExibirLista={setExibirLista} qtdCarrinho={listaCarrinho.length}/>
      {
        exibirLista ? <GradeProdutos listaProdutos={produtos} listaCarrinho={listaCarrinho} setListaCarrinho={setListaCarrinho}  /> : <TabelaCarrinho listaProdutos={listaCarrinho}  setListaCarrinho={setListaCarrinho}  setExibirLista={setExibirLista} exibirLista={exibirLista}/>
      }
    </div>
  );
}

export default App;
