export default function Chute(props){
 
  return(
        <div className="chute">
          <p>Já sei a palavra!</p>
          <input type="text" 
          className="guess" 
          value={props.varInput}
          onChange={(event) => props.input(event.target.value)}/>
          <button 
          disabled={!props.startGame}
          onClick={()=>props.funcao(props.varInput)}
          className="fazerChute">Chutar</button>
        </div>
    );
}