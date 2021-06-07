
import React from "react";
import {useState} from "react"
import {nameToColor} from './ColorList'
const Calculation = () =>{   
    
    const generateTable = () =>{
        let table = []
    
        let multiple = 1
            for(let x = 0; x < 10; x++){
                table.push([])
                let current = multiple
                let to_add = current
                for(let y = 0; y < 10; y++){
                    table[x].push(current)
                    current += to_add
                }
                multiple += 1
            }
            console.log(table)
           return table
    }
  
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
    
    const createHexToColor = () => {
        let HexToColorObject = {}
        let hexes = Object.values(nameToColor)
        let names = Object.keys(nameToColor)
        for(let i = 0; i < hexes.length; i++){
            HexToColorObject[hexes[i]] = names[i]
        }
        return HexToColorObject
    }
    
    const [table, setTable] = useState(generateTable())
    const [numbers, setNumbers] = useState([0,0,0])
    const [largest, setLargest] = useState("")
    const [multiple, setMultiple] = useState([23,500])
    const [numberString, setNumberString] = useState(allMultiplesOfTwentyThree(23, 500)[0])
    const [TotalString, setTotalString] = useState(allMultiplesOfTwentyThree(23, 500)[1])
    const [firstInRange, setFirstInRange] = useState()
    const [secondInRange, setSecondInRange] = useState()
    const [numberRange, setNumberRange] = useState("")
    const [vowel, setVowel] = useState("")
    const [vowelResponse, setVowelResponse] = useState("")
    const [hex, setHex] = useState("")
    const [hexResponse, setHexResponse] = useState("")
    const vowels = ["a","e","i","o","u"]
    const hexToColor = createHexToColor();
    const [tableNumber, setTableNumber] = useState(1)
    const [column, setColumn] = useState();
    const[name, setName] = useState("")
    const [issue, setIssue] =useState("")
    const [steps, setSteps] =useState("")
    const[enteredName, setEnteredName] = useState(false)
    const[enteredIssue, setEnteredIssue] = useState(false)
    const[enteredSteps, setEnteredSteps] = useState(false)
  
    const getRGB = () => {
        if(hex.length != 7 || hex[0] != "#"){
            setHexResponse("Sorry, we need a proper hex code to convert!")
        }
        else{
            let hexToConvert = hex.replace('#','')
            let r = parseInt(hexToConvert.substring(0,2),16);
            let g = parseInt(hexToConvert.substring(2,4),16);
            let b = parseInt(hexToConvert.substring(4,6),16);
            setHexResponse(`rgb(${r},${g},${b})   ${hexToColor[hex]}`)
        }
    }   
    
    const formatColumn = (oldColumn) => {
        let i = 1
        let column = [...oldColumn]
        while(i < column.length){
            let currentFirst = column[i][0]
            let lastLast = column[i-1][1]
            column[i][0] = lastLast
            column[i-1][1] = currentFirst
            i += 2
        }
        return column
    }
    const generateColumn = (tableNumber)=>{
        let column = []
        let multiplier = 1
        for(let x = 0; x < 10; x++){
            column.push([])
            column[x].push(multiplier)
            column[x].push(tableNumber * multiplier)
            multiplier += 1
        }
        setColumn(column)
        console.log(column)
        setColumn(formatColumn(column))
        
    }

 
    
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
    
    const checkVowel = () =>{
        if(vowels.includes(vowel)){
            setVowelResponse(`Yes! ${vowel} is a vowel!`)
        }
        else{
            setVowelResponse(`No! ${vowel} is not a vowel!`)
            
        }
    }
    
    const changeNumber=(targetValue, index)=>{
       let currentNumbers = [...numbers]
       currentNumbers[index] = targetValue;
       setNumbers(currentNumbers);
    }
    
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
    const checkEntered = (title) => {
        if(title == "name"){
            if(name.length > 0){
                setEnteredName(true)
            }
        }
        if(title == "issue"){
            if(issue.length > 0){
                setEnteredIssue(true)
            }
        }
        if(title == "steps"){
            if(steps.length > 0){
                setEnteredSteps(true)
            }
        }
    }
    const resetForm = () => {
        setEnteredName(false)
        setName("")
        setEnteredIssue(false)
        setIssue("")
        setEnteredSteps(false)
        setSteps("")
    }
    const DetermineForm=() =>{
        
        if(enteredName == false){
            return( <label style={{marginTop:"10px",display: "flex", flexDirection:"column", justifyContent: "center",}}>Name: 
                <input type="text" onChange={e=> setName(e.target.value)} />
                <button onClick={()=> checkEntered("name")}>Enter Name</button>
            </label>)
            }
        else if(enteredIssue == false){
            return( <label style={{marginTop:"10px",display: "flex", flexDirection:"column", justifyContent: "center",}}>Issue: 
                <textarea type="text" onChange={e=> setIssue(e.target.value)} />
                <button onClick={()=> checkEntered("issue")}>Enter Issue</button>
                <button onClick={()=> setEnteredName(false)}>Back</button>
            </label>
        
            )
        }
        else if(enteredSteps == false){
            return( <label label style={{marginTop:"10px", display: "flex", flexDirection:"column", justifyContent: "center",}}>Steps: 
                <textarea type="text" onChange={e=> setSteps(e.target.value)} />
                <button onClick={()=> checkEntered("steps")}>Enter Steps </button>
                <button onClick={()=> setEnteredIssue(false)}>Back</button>

            </label>
            
            )
        }
        else{
            return(
                <div>
                    <div>
                        Name: {name}
                    </div>
                    <div>
                        Issue: {issue}
                    </div>
                    <div>
                        Steps taken: {steps}
                    </div>
                    <button onClick={() => resetForm()}> Start Over</button>
                </div>
            )
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
               
                <h4> Calculations {numberRange}</h4>
                
            </h3>
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
                <h4><button onClick = {() => Max()}>determine largest of first two numbers</button>
                <button onClick = {() => MaxOfThree()}>determine largest number of all three</button></h4>
                <h3>Largest: {largest}</h3>
            
            <h3>
                <label>
                    Is it a vowel? 
                    <input type = 'text' onChange={e => setVowel(e.target.value)}/>
                    <button onClick={()=> checkVowel()}> lets see... </button>
                    <h4>{vowelResponse}</h4>

                </label>
            </h3>
            <h3>
                <label>
                    Find the RGB values and color based on a Hexidecimal code : 
                    <input type = 'text' onChange={e => setHex(e.target.value)}/>
                    <button onClick={()=> getRGB()}> lets see... </button>
                    <h4>Converted hex: {hexResponse}</h4>

                </label>
            </h3>
            <h3>
               Multiplication Table
                <div  style = {{
                    display: "grid",
                    gridTemplateColumns: `repeat(${10}, 50px)`,
                    marginTop: "20px"
                   
                     }}>
                    {table.map((rows, index)=>{
                       return(
                           <div>
                               {rows.map((x,y) =>{
                                   return <div>{x}</div>
                               })}
                           </div>
                       )
                    })}
                </div>
                
            </h3>
            <h3>
                Multiplication Table on demand
                <label>
                <input type = "number"  onChange={e=> setTableNumber(e.target.value)}/>
                    <button onClick={()=> generateColumn(tableNumber)}> Change Table Number</button>
                </label>
                <div  style = {{
                    display: "grid",
                    gridTemplateColumns: `repeat(${2}, 50px)`,
                    marginTop: "20px"
                     }}>
                    { column?.map((rows, index)=>{
                        
                       return(
                           
                           <div>
                               {rows.map((x) =>{
                                   return <div>{x}</div>
                               })}
                           </div>
                       )
                    })}
                </div>
            </h3>
           
            <h3>
                Feed-back Form
                <div style={{marginTop:"10px",width:"300px", height:"300px" , border: "1px solid", display: "flex", flexDirection:"column", justifyContent: "start"}}>
                    
                     {DetermineForm()}
                </div>
            </h3>
           
        </div>
    )
}

export default Calculation;