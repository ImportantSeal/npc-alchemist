import React, {useRef, useEffect} from "react";

import FirstNameRoller from './testroll';
import Workroller from './testwork';
import AgeRoller from './ageroll';

const RollEverything =()=>{
    const ageRef= useRef(null);
    const workRef = useRef(null);
    const firstNameRef = useRef(null);

const rollAll = () =>{
    if (ageRef.current) ageRef.current.rollAge();
    if (workRef.current) workRef.current.rollJob();
    if (firstNameRef.current) firstNameRef.current.rollName();
};

useEffect(()=>{
    rollAll();
}, []);

return(
    <div>
        <h1>Roll Everything</h1>
        <button onClick={rollAll}>Roll all</button>
        <AgeRoller ref={ageRef}/>
        <Workroller ref={workRef}/>
        <FirstNameRoller ref={firstNameRef}/>
    </div>
);
}

export default RollEverything;
