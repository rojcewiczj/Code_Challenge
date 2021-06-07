import React from "react";
import {useState} from "react"

const IntegerNumberRange = () =>{
    
    const [firstInRange, setFirstInRange] = useState()
    const [secondInRange, setSecondInRange] = useState()
    const [numberRange, setNumberRange] = useState("")
    const generateRange = () => {
        let first = parseInt(firstInRange)
        let second = parseInt(secondInRange)
        let stringToReturn = ""
        if(second < first){
            stringToReturn += "-1"
            setNumberRange(stringToReturn)
        }
        else{
           for(let i = first; i < second + 1;i++){
               stringToReturn += ` ${i} `
           }
           setNumberRange(stringToReturn)
        }

    }

    return(
        <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
          <h3>Integer Number Range</h3>
            <h3>
                
               
                <label>
                    First Number In Range
                    <input type="number" onChange={e => setFirstInRange(e.target.value)}/>
                </label>
                <label>
                    Second Number In Range
                    <input type="number" onChange={e => setSecondInRange(e.target.value)}/>
                </label>
                <button onClick={()=> generateRange()}>Generate range</button>
               
                <h4>{numberRange}</h4>
                
            </h3>
        </div>
    )
}
export default IntegerNumberRange;