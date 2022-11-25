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
            onClick={props.function}
            >Escolher Palavra</button>
            <ul className="word">
                <li>_</li>
                <li>_</li>
                <li>_</li>
                <li>_</li>
            </ul>
          </div>
        </div>
    );
}