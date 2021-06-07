import React from "react";
import {useState} from "react"

const LargestNum = () =>{
    const [numbers, setNumbers] = useState([0,0,0])
    const [largest, setLargest] = useState("")
    const Max = () => {
        let numbersToJudge = []
        numbers.forEach(element => {
            numbersToJudge.push(parseInt(element))
        });
        if(numbersToJudge[0] > numbersToJudge[1]){
            setLargest(numbers[0].toString())
        }
        else if(numbersToJudge[1] > numbersToJudge[0]){
            setLargest(numbers[1].toString())
        }
        else{
            setLargest("first and second numbers are equal")
        }
    }

    const MaxOfThree = () => {
        let numbersToSort = []
        numbers.forEach(element => {
            numbersToSort.push(parseInt(element))
        });
        numbersToSort.sort(function(a, b){return a-b})
        console.log(numbersToSort)
        if(numbers[0] == numbers[1] && numbers[0] == numbers[2]){
            setLargest("first, second, and third numbers are equal")
        }
        else{
        setLargest(numbersToSort[2])
    }
}

    const changeNumber=(targetValue, index)=>{
        let currentNumbers = [...numbers]
        currentNumbers[index] = targetValue;
        setNumbers(currentNumbers);
     }

    return(
        <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
            <h3>Determine Largest Number</h3>
              <h3>
                  
                <label>
                    First Number
                <input type = "number"  onChange={e=> changeNumber(e.target.value, 0)}/>
                </label>
                <label>
                    Second Number
                <input type = "number"  onChange={e=> changeNumber(e.target.value, 1)}/>
                </label>
                <label>
                    Third Number
                <input type = "number"  onChange={e=> changeNumber(e.target.value, 2)}/>
                </label></h3>
                <h4><button onClick = {() => Max()}>largest of first two numbers</button>
                <button onClick = {() => MaxOfThree()}>largest number of all three</button></h4>
                <h3>{largest}</h3>
            
            <h3></h3>
        </div>
    )
}
export default LargestNum;