import React, {useState} from "react";
import occupation from '../data/occupation';

const Workroller = () =>{

    const [selectedJob, setSelectedJob] = useState('')

    const rollJob = () =>{
        const workClass = Object.keys(occupation);
        const randomClass = workClass[Math.floor(Math.random()* workClass.length)];
        const jobList = occupation[randomClass];
        const randomJob = jobList[Math.floor(Math.random()* jobList.length)];
        setSelectedJob(`${randomJob} (${randomClass})`);
    };

    return (
        <div>
            <h1>Occupation Roller</h1>
            <button onClick = {rollJob}>Roll Name</button>
            {selectedJob && <p>{selectedJob}</p>}
        </div>
    );
};

export default Workroller;