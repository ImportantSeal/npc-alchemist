import './App.css'
import React from 'react';
import FirstNameRoller from './components/testroll';
import Workroller from './components/testwork';
import AgeRoller from './components/ageroll';
import RollEverything from './components/rollAll';

function App(){
  return(
    <div className="App">
      <RollEverything/>
      <FirstNameRoller/>
      <Workroller/>
      <AgeRoller/>
    </div>
  );
};


export default App;
