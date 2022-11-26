import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute"
import palavras from "/home/luiza/Desktop/projects/projeto8-jogoforca/src/palavras"
import {useState} from "react"



function App() {
const [startGame, setStartGame] = useState(false);
const [allDisabled, setAllDisabled] = useState(true);
const [erros, setErros] = useState(0);
const [chosenWord, setChosenWord] =useState([]);
const [arrayClicked, setArrayClicked] = useState([]);
const [lost, setLost] = useState(false);
const [won, setWon] = useState(false);
const [input, setInput] = useState("");


function restartGame(){
  setErros(0);
  setChosenWord([]);
  setArrayClicked([]);
  setLost(false);
  setWon(false);
  chooseWord();
}

function chooseWord(){
  setStartGame(true);
  setAllDisabled(false);
  let random = palavras[Math.floor(Math.random()*palavras.length)];
  let arrayWord = Array.from(random);
  setChosenWord(arrayWord);
}

function clickLetter(letra){
  let uniqueLetters = [...new Set(chosenWord)];
  
  const novoArrayClicked = [...arrayClicked, letra];
  setArrayClicked(novoArrayClicked);

  const correct = novoArrayClicked.filter(letter => uniqueLetters.includes(letter));
  if(correct.length === uniqueLetters.length){
    win();
  }
  if (!chosenWord.includes(letra)){
    let error = erros+1;
    setErros(error);
    if(erros === 5){
        loose()
    }
  }
}

function win(){
  setWon(true);
  endGame();
}

function loose(){
  setLost(true);
  endGame();
}

function endGame(){
  setStartGame(false);
  setAllDisabled(true);
}

function chute(valorInput){
  const newArray = [...chosenWord]
  const stringArray = newArray.join("");
  if (valorInput === stringArray){
      win();
  } else {
    loose();
  }
  setInput("");
} 

  return (
    <div className="conteudo">
        <Jogo funcao={restartGame} startGame={startGame} erros={erros} chosenWord={chosenWord} clicado={arrayClicked} lost={lost} won={won}/>
        <Letras button={allDisabled} funcao={clickLetter} clicado={arrayClicked}/>
        <Chute startGame={startGame} input={setInput} varInput ={input} funcao={chute}/>
      </div>
  );
}

export default App;
