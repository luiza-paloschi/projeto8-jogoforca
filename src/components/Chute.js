export default function Chute(props){
 function funcao(){
  console.log("esta habilitado")
 }
  
  return(
        <div className="chute">
          <p>Já sei a palavra!</p>
          <input type="text" className="guess"/>
          <button 
          disabled={!props.startGame}
          onClick={funcao}
          className="fazerChute">Chutar</button>
        </div>
    );
}