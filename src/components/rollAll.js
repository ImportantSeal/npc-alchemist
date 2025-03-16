import React, {useState, useRef} from "react";

import FirstNameRoller from './testroll';
import Workroller from './testwork';
import AgeRoller from './ageroll';
import age from "../data/age";

const RollEverything =()=>{
    const ageRef= useRef(null);

const rollAll = () =>{
    if (ageRef.current) ageRef.current.rollAge();
};

return(
    <div>
        <h1>Roll Everything</h1>
        <button onClick={rollAll}>Roll all</button>
        <AgeRoller ref={ageRef}/>
    </div>
);
}

export default RollEverything;
