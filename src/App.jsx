import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  
  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'X'? 'O' : 'X');
  }
  return (
    <main>
      <div id='game-container'> 
      <ol id='players' className="highlight-player">
        <Player name={'Player 1'} symbol={'X'} isActive={activePlayer === 'X'}/>
        <Player name={'Player 2'} symbol={'O'} isActive={activePlayer === 'O'}/>
      </ol>
      <GameBoard onSelectSquare={ handleSelectSquare } currentPlayer={activePlayer}/>
      </div>
    </main>
  )
}

export default App;