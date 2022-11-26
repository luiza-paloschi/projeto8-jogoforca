export default function Jogo(props){
  
  
  
  return(
        <div className="jogo">
          <div className="imagem">
            <img data-test ="game-image" src={props.lost?  `/assets/forca6.png` :`/assets/forca${props.erros}.png`} alt=""/>
          </div>
          <div className="palavra">
            <button
            data-test="choose-word" 
            className="choose"
            disabled={props.startGame}
            onClick={props.funcao}
            >Escolher Palavra</button>
            <ul 
            data-test="word"
            data-answer={props.chosenWord.join("")}
            className={`word ${props.lost ? "loose" : ""} ${props.won ? "win" : ""}`}>
                {props.chosenWord.map((letra)=> <li>{props.lost || props.won? letra : (props.clicado.includes(letra) ? letra : "_")}</li>)}
            </ul>
          </div>
        </div>
    );
}