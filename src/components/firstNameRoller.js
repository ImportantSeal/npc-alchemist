import React, {useState, useImperativeHandle, forwardRef} from "react";
import names from '../data/names';

const FirstNameRoller = forwardRef((props, ref) =>{

    const [selectedName, setSelectedName] = useState('')

    const rollName = () =>{
        const races = Object.keys(names);
        const randomRace = races[Math.floor(Math.random()* races.length)];
        const nameList = names[randomRace];
        const randomName = nameList[Math.floor(Math.random()* nameList.length)];
        setSelectedName(`${randomName} (${randomRace})`);
    };

    useImperativeHandle(ref, ()=>({
        rollName
    }));

    return (
        <div>
            <h3>First Name</h3>
            <button onClick = {rollName}>Roll Name</button>
            {selectedName && <p>{selectedName}</p>}
        </div>
    );
});

export default FirstNameRoller;