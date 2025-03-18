import React, {useState, forwardRef, useImperativeHandle} from "react";
import occupation from '../data/occupation';

const Workroller = forwardRef((props, ref) =>{

    const [selectedJob, setSelectedJob] = useState('')

    const rollJob = () =>{
        const workClass = Object.keys(occupation);
        const randomClass = workClass[Math.floor(Math.random()* workClass.length)];
        const jobList = occupation[randomClass];
        const randomJob = jobList[Math.floor(Math.random()* jobList.length)];
        setSelectedJob(`${randomJob} (${randomClass})`);
    };

    useImperativeHandle(ref, ()=>({
        rollJob
    }));

    return (
        <div>
            <h3>Occupation</h3>
            <button onClick = {rollJob}>Roll Job</button>
            {selectedJob && <p>{selectedJob}</p>}
        </div>
    );
});

export default Workroller;