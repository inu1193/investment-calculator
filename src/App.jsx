import Header from "./components/Header"
import Result from "./components/Result";
import UserInputs from "./components/UserInputs"
import React, { useState } from "react";


function App() {
  const [userInput , setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1000,
    expectedReturn : 5,
    duration : 5,
})

const inputIsValid = userInput.duration >=1;

function handleChange(inputIdentifier , newValue){
setUserInput(prevUserInput =>{
    return{
        ...prevUserInput,
        [inputIdentifier] : +newValue
    };
})
}
  
  return (
    <>
    <Header />
    <UserInputs userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && <p className="center">Please Enter valid Duration.</p>}
    {inputIsValid && <Result input={userInput}/>}
    </>
  )
}

export default App
