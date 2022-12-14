export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return(
        <div className="letras">
            {alfabeto.map((letra)=>
            <button
            data-test="letter"
            disabled={props.button ? true : (props.clicado.includes(letra) ? true : false)}
            onClick={()=>props.funcao(letra)}
            className={`letter ${props.button ? "desabilitado" : (props.clicado.includes(letra) ? "desabilitado" : "habilitado")}`}>{letra.toUpperCase()}</button>)}
        </div>
    );
}