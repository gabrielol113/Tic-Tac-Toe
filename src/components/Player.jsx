import { useState } from "react";

export default function Player({name, symbol, isActive}){
    const [isEditing, SetIsEditing] = useState(false);
    const [pName, setPlayerName] = useState(name);

    function handleEditClick(){
        SetIsEditing((editing)=> !editing);
    }

    let playerName = <span className="player-name">{pName}</span>
    if(isEditing){
        playerName = <input type="text" value={pName} required onChange={ ev => setPlayerName(ev.target.value) }/>
    }
    return(
        <li className={isActive? 'active': undefined}>
          <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={ handleEditClick }>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}