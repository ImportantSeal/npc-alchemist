import React, {useRef, useEffect} from "react";

import FirstNameRoller from './firstNameRoller';
import JobRoller from './jobRoller';
import AgeRoller from './ageRoller';

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
        <JobRoller ref={workRef}/>
        <FirstNameRoller ref={firstNameRef}/>
    </div>
);
}

export default RollEverything;
