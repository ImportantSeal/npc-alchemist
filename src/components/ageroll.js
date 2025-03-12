import React, {useState} from "react";

const AgeRoller = () =>{
    const [selectedAge, setSelectedAge] = useState('');


    const rollAge = () =>{
        const randomAge = Math.floor(Math.random()* (99-16+1))+16;
        setSelectedAge (`${randomAge}`);
    };

    return(
        <div>
            <h1>Roll Age</h1>
            <button onClick={rollAge}>Roll age</button>
            <p>{selectedAge}</p>
        </div>
    );

};

export default AgeRoller