import React, {useState, forwardRef, useImperativeHandle} from "react";

const AgeRoller = forwardRef((props,ref) =>{

    const [selectedAge, setSelectedAge] = useState('');
    
    const rollAge = () =>{
        const randomAge = Math.floor(Math.random()* (90-14+1))+14;
        setSelectedAge (`${randomAge}`);
    };

    useImperativeHandle(ref, () => ({
        rollAge,
    }));

    return(
        <div>
            <h3>Roll Age</h3>
            <button onClick={rollAge}>Roll age</button>
            <p>{selectedAge}</p>
        </div>
    );
});


export default AgeRoller
