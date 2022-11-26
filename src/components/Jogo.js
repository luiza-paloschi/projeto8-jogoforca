export default function Jogo(props){
  
  
  
  return(
        <div className="jogo">
          <div className="imagem">
            <img src={`/assets/forca${props.erros}.png`} alt=""/>
          </div>
          <div className="palavra">
            <button 
            className="choose"
            disabled={props.startGame}
            onClick={props.funcao}
            >Escolher Palavra</button>
            <ul className={`word ${props.lost ? "loose" : ""} ${props.won ? "win" : ""}`}>
                {props.chosenWord.map((letra)=> <li>{props.lost || props.won? letra : (props.clicado.includes(letra) ? letra : "_")}</li>)}
            </ul>
          </div>
        </div>
    );
}