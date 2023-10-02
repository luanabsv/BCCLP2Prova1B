import Produto from "../templates/Produto";
import { useEffect, useState } from "react";

export default function TabelaCarrinho(props) {
    useEffect(() => {
        let prods;
        prods = JSON.parse(localStorage.getItem("lista-produtos") || '[]')
        setProdutosSelecionados([...prods]);
        console.log(prods);
        console.log(produtosSelecionados);
    },[]);

    const [produtosSelecionados, setProdutosSelecionados] = useState([]);
    function voltarLista() {
        props.setExibirLista(true)
    }


    return (
        <div>
            <div id='botao-voltar'>
                <button
                     onClick={() => { voltarLista() }}
                    style={{
                        backgroundColor: 'rgb(255,60,60)',
                        color: 'white',
                        border: '0px',
                        borderRadius: '10px',
                        height: '40px',
                        marginTop: '20px',
                        marginLeft: '30px',
                        marginBottom: '30px'
                    }}
                    type='button'>
                    Voltar para lista de produtos
                </button>
            </div>

            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: '10px',
                padding: '10px',
                gap: '20px'
            }}>
                {props.listaProdutos.map((produto) => (
                    <Produto key={produto.id} produto={produto}  exibirLista={props.exibirLista} setListaCarrinho={props.setListaCarrinho}/>
                ))}
            </div>
        </div>
    )
}