import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute"
import palavras from "/home/luiza/Desktop/projects/projeto8-jogoforca/src/palavras"
import {useState} from "react"



function App() {
const [startGame, setStartGame] = useState(false);
const [allDisabled, setAllDisabled] = useState(true);
const [erros, setErros] = useState(0);
const [chosenWord, setChosenWord] =useState("")
  

function chooseWord(){
  console.log("esta funcionando")
  setStartGame(true)
  setAllDisabled(false)
}

function clickLetter(){
  let error = erros+1
  setErros(error)
}
  
  return (
    <div className="conteudo">
        <Jogo function={chooseWord} startGame={startGame} erros={erros}/>
        <Letras button={allDisabled} function={clickLetter}/>
        <Chute startGame={startGame}/>
      </div>
  );
}

export default App;
