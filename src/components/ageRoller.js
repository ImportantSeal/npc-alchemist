import React, {useState, forwardRef, useImperativeHandle} from "react";

const AgeRoller = forwardRef((props,ref) =>{

    const [selectedAge, setSelectedAge] = useState('');
    const p = 2;
    const rollAge = () =>{
        const randomAge = Math.floor(Math.pow(Math.random(),p)* (90-14+1))+14;
        setSelectedAge (`${randomAge}`);
    };

    useImperativeHandle(ref, () => ({
        rollAge,
    }));

    return(
        <div>
            <h3>Age</h3>
            <button onClick={rollAge}>Roll age</button>
            <p>{selectedAge}</p>
        </div>
    );
});


export default AgeRoller
