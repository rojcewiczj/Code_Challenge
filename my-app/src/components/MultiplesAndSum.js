import React from "react";
import {useState} from "react"

const MultiplesAndSum = () =>{

    const allMultiplesOfTwentyThree = (multiple, endingNumber) =>{
        let sum = 0;
        let  numberString = ""
        for(let i = 0; i < endingNumber; i+=multiple){
          const numberToString = i.toString();
          numberString += ` ${numberToString} `
          sum += i;
        }
        const TotalString = sum.toString();
        const strings = [numberString, TotalString]
        return strings
    }
    
    const [multiple, setMultiple] = useState([23,500])
    const [numberString, setNumberString] = useState(allMultiplesOfTwentyThree(23, 500)[0])
    const [TotalString, setTotalString] = useState(allMultiplesOfTwentyThree(23, 500)[1])

    const changeMultiple = (targetValue, switcher)=> {
        let newMultiples = [...multiple]

        if(switcher == 0){
            newMultiples[0] = targetValue
        }
        else{
            newMultiples[1] = targetValue
        }
        setMultiple(newMultiples)
    }
    const ResetMultiples = () => {
        let first = parseInt(multiple[0])
        let second = parseInt(multiple[1])
        setNumberString(allMultiplesOfTwentyThree(first, second)[0])
        setTotalString(allMultiplesOfTwentyThree(first, second)[1])
     }

   

    return(
        <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
              <h3>
                <label>
                    Set Multiple
                    <input type="number" onChange={e=> changeMultiple(e.target.value, 0)}/>
                </label>
                <label>
                    Set Ending Number
                    <input type="number" onChange={e=> changeMultiple(e.target.value, 1)}/>
                </label>
                <label>
                    <button onClick = {() => ResetMultiples()}> Reset Multiples</button>
                </label>
            </h3>
            <h3>Elements: {numberString}</h3>
            <h3>Sum: {TotalString}</h3>
        </div>
    )
}
export default MultiplesAndSum;