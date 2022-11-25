import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute"
import palavras from "/home/luiza/Desktop/projects/projeto8-jogoforca/src/palavras"
import {useState} from "react"



function App() {
const [startGame, setStartGame] = useState(false);
const [allDisabled, setAllDisabled] = useState(true);
const [erros, setErros] = useState(0);
const [chosenWord, setChosenWord] =useState([])
const [arrayClicked, setArrayClicked] = useState([])
const [lost, setLost] = useState(false)
const [won, setWon] = useState(false)
 console.log(arrayClicked)

function restartGame(){
  setErros(0)
  setChosenWord([])
  setArrayClicked([])
  setLost(false)
  setWon(false)
  chooseWord()
}

function chooseWord(){
  setStartGame(true)
  setAllDisabled(false)
  let random = palavras[Math.floor(Math.random()*palavras.length)]
  let arrayWord = Array.from(random)
  setChosenWord(arrayWord)
}

function clickLetter(letra){
  let uniqueLetters = [...new Set(chosenWord)]
  
  const novoArrayClicked = [...arrayClicked, letra]
  setArrayClicked(novoArrayClicked)

  const correct = novoArrayClicked.filter(letter => uniqueLetters.includes(letter))
  if(correct.length === uniqueLetters.length){
    setWon(true)
    endGame()
  }
  if (!chosenWord.includes(letra)){
    let error = erros+1
    setErros(error)
    if(erros === 5){
        setLost(true)
        endGame()
    }
  }
}

function endGame(){
  setStartGame(false)
  setAllDisabled(true)
}

  return (
    <div className="conteudo">
        <Jogo function={restartGame} startGame={startGame} erros={erros} chosenWord={chosenWord} clicado={arrayClicked} lost={lost} won={won}/>
        <Letras button={allDisabled} function={clickLetter} clicado={arrayClicked}/>
        <Chute startGame={startGame}/>
      </div>
  );
}

export default App;
