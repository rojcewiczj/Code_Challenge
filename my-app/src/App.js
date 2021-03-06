import logo from './logo.svg';
import './App.css';

import hexadecimal from './components/Hexadecimal'
import integerNumberRange from './components/IntegerNumberRange'
import MultiplicationTable from './components/MultiplicationTable'
import userFeedBackForm from './components/UserFeedbackForm'
import { useState } from 'react';
import IntegerNumberRange from './components/IntegerNumberRange';
import LargestNum from './components/LargestNum';
import IsVowel from './components/IsVowel';
import Hexidecimal from './components/Hexadecimal';
import UserFeedBackForm from './components/UserFeedbackForm';
import MultiplesAndSum from './components/MultiplesAndSum';

function App() {

  //setting state variable
    
  const [current, setCurrent] = useState("0")
   
  const renderIntNumRange=()=>{
    return(
      <IntegerNumberRange/>
    )
  }
  const renderMultiTable=()=>{
    return(
      <MultiplicationTable/>
    )
  }
  const renderLargestNum=()=>{
    return(
      <LargestNum/>
    )
  }
  const renderIsVowel=()=>{
    return(
      <IsVowel/>
    )
  }
  const renderHex=()=>{
    return(
      <Hexidecimal/>
    )
  }
  const renderForm = () => {
    return(
      <UserFeedBackForm/>
    )
  }
  const renderMultiAndSum = () => {
    return(
      <MultiplesAndSum/>
      )
    
  }
  const allComponents = {
    "0" : renderIntNumRange(),
    "1" : renderMultiAndSum(),
    "2" : renderMultiTable(),
    "3" : renderLargestNum(),
    "4" : renderIsVowel(),
    "5" : renderHex(),
    "6" : renderForm()
  }

  const nextProblem =() => {
    let num = parseInt(current)
    num += 1
    let newCurrent = num.toString()
    setCurrent(newCurrent)
  
  }
  const backProblem = () => {
    let num = parseInt(current)
    num -= 1
    let newCurrent = num.toString()
    setCurrent(newCurrent)
  }
  
  const checkWhatToRender = () => {
    return allComponents[current]
  }
 
  const backOrNot = () => {
    let num = parseInt(current)
    if(num > 0){
      return( <button onClick={()=> backProblem()}>Back</button>)
    }
  }
  const nextOrNot = () => {
    let num = parseInt(current)
    if(num < 6){
      return( <button onClick={()=> nextProblem()}>Next</button>)
    }
  }

  

  return (
    <div className="App"  >
      
      {checkWhatToRender()}
      <div>
      {backOrNot()}
      {nextOrNot()}
    </div>
    

    
    </div>
  );
}

export default App;
