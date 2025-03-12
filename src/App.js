import './App.css'
import React from 'react';
import FirstNameRoller from './components/testroll';
import Workroller from './components/testwork';
import AgeRoller from './components/ageroll';

function App(){
  return(
    <div className="App">
      <FirstNameRoller/>
      <Workroller/>
      <AgeRoller/>
    </div>
  );
};

export default App;
