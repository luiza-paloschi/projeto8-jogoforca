export default function Jogo(){
    return(
        <div className="jogo">
          <div className="imagem">
            <img src="/assets/forca0.png" alt=""/>
          </div>
          <div className="palavra">
            <button class="choose">Escolher Palavra</button>
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