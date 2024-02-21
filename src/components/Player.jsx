import { useState } from 'react';


export default  function Player({name,symbol,isActive , onChangeName}){
    
    const [playerName,setPlayerName] = useState(name)
    const [isEditing,setIsEditing] = useState(false);
    
    function clickHandler(){
        setIsEditing((editing) => !editing );
        if(isEditing){
        onChangeName(symbol,playerName)
    }}

    function handleChange(event) {
        setPlayerName(event.target.value);
    }
    
    let editPlayerName =<span className="player-name">{playerName}</span>;
    // let btnCaption ='Edit'

    if(isEditing){
        editPlayerName= <input type="text" required value={playerName} onChange={handleChange}></input>;
        // btnCaption='Save'sss
    }

    return(
        <li className={isActive ? 'active' : undefined }>
            <span className="player">
            {editPlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={clickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    );
}