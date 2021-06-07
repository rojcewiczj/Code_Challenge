CodingChallenges
A series of code challenges

NOTE that you can use any language you choose and are not limited to JavaScript or other. Be as creative as you can with these challenges.

Integer Numbers Range
Write some code with a function/method that accepts two integers x1 and x2 returns all the integers between them. If x2 is lower than x1 it should return -1. Provide output to console or web page.

          const IntegerNumberRange = () =>{

          // state variables
          const [firstInRange, setFirstInRange] = useState()
          const [secondInRange, setSecondInRange] = useState()
          const [numberRange, setNumberRange] = useState("")

          //generating a number range
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
Multiplications table
Write a function/method that writes in the console the multiplication table (from 1 to 10)
      
      
        const MultiplicationTable = () =>{
  
    // generating the default 1-10 multiplication table
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
    
    // setting state variables
    const [table, setTable] = useState(generateTable())
    const [column, setColumn] = useState();
    const [tableNumber, setTableNumber] = useState(1)
    
    // help function for formatting the single column multiplication table in order to render appropriately
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

    // function for generating column form multiplciation table for desired number
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


    return(
        <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
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
Multiplications table on demand
Write a function/method that writes in the console the multiplication table (in one column) of any number passed as parameter
              
              Multiplication Table on demand
                <label>
                <input type = "number"  onChange={e=> setTableNumber(e.target.value)}/>
                    <button onClick={()=> generateColumn(tableNumber)}> Change Table Number</button>
                </label>
                <div  style = {{
                    display: "grid",
                    gridTemplateColumns: `repeat(${2}, 50px)`,
                    marginTop: "20px",
                    marginLeft: "250px"
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
        </div>
        
Calculation
Write a program that writes in the console or a web page all the multiples of 23 less than 500 and at the end writes out the sum of all of them. Once working enhance so that the user can provide the multiple and ending number rather than hard coding it.

     const MultiplesAndSum = () =>{
        // function for generating multiples of 23 in a string form
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
        
        // setting state variables
        const [multiple, setMultiple] = useState([23,500])
        const [numberString, setNumberString] = useState(allMultiplesOfTwentyThree(23, 500)[0])
        const [TotalString, setTotalString] = useState(allMultiplesOfTwentyThree(23, 500)[1])
        
         // function for changing the variables of the multiple and end number
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
        
        // generating new strings to display the multiple chain and the sum of all multiples
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
max() function/method
Define a function/method max() that takes two numbers as arguments and returns the largest of them in the console or web page.

maxOfThree() function/method
Define a function/method maxOfThree() that takes three numbers as arguments and returns the largest of them.


    const LargestNum = () =>{
        // setting state variables
        const [numbers, setNumbers] = useState([0,0,0])
        const [largest, setLargest] = useState("")
        
        // function for determining the largest between two numbers
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
        
        // function for determining the max between three numbers
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
        // function for changing number variable
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
    
isVowel() function/method
Write a function/method that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


          const IsVowel = () =>{
          
              //setting state variables
              const [vowel, setVowel] = useState("")
              const [vowelResponse, setVowelResponse] = useState("")
              const vowels = ["a","e","i","o","u"]
              
              // function for checking in inputed string is within the vowels array
              const checkVowel = () =>{
                  if(vowels.includes(vowel)){
                      setVowelResponse(`Yes! ${vowel} is a vowel!`)
                  }
                  else{
                      setVowelResponse(`No! ${vowel} is not a vowel!`)

                  }
              }
              return(
                  <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
                      <h3>Determine if a character is a vowel</h3>
                       <h3>
                          <label>
                              Is it a vowel? 
                              <input type = 'text' onChange={e => setVowel(e.target.value)}/>
                              <button onClick={()=> checkVowel()}> lets see... </button>
                              <h4>{vowelResponse}</h4>

                          </label>
                      </h3>
                  </div>
              )
          }
          
Hexadecimal
Write a function/method that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function/method the name getRGB(). An example in JavaScript would produce the following in the JavaScript console.

Hexadecimal enhanced
Improves the previous function/method so that in addition to the conversion also identifies some basic colors:

      
       const Hexidecimal = () =>{
          //helper function for recognizing letters, in order to convert lower case hexidecimal codes to upper case
          function isCharacterALetter(char) {
                  return (/[a-zA-Z]/).test(char)
                }

         // function for taking an imported object where the key was the color-name and the value was the hexidecimal code,
         // I created a new object where the hex code is the key (with upper case letters) and the value is the name, for quick look up
         
          const createHexToColor = () => {
              let HexToColorObject = {}
              let hexes = Object.values(nameToColor)
              let names = Object.keys(nameToColor)
              for(let i = 0; i < hexes.length; i++){
                  let newHex = ""
                  for(let j = 0; j < hexes[i].length; j++){
                      if(isCharacterALetter(hexes[i][j])){
                          let newChar = hexes[i][j].toUpperCase()
                          newHex += newChar
                      }
                      else{
                          newHex += hexes[i][j]
                      }
                  }
                  HexToColorObject[newHex] = names[i]

              }
              return HexToColorObject
              console.log(HexToColorObject)
          }
          
          // state variables
          const [hex, setHex] = useState("")
          const [hexResponse, setHexResponse] = useState("")
          const hexToColor = createHexToColor();
           
           // function for getting RGB values from hex code
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

          return(
              <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}> 
                  <h3>Hexidecimal Converter</h3>
                     <h3>

                      <label>
                          Find the RGB values and color based on a Hexidecimal code : 
                          <input type = 'text' onChange={e => setHex(e.target.value)}/>
                          <button onClick={()=> getRGB()}> lets see... </button>
                          <h4>{hexResponse}</h4>

                      </label>
                  </h3>
              </div>
          )
      }

Create a user feedback form using form/prompt

  You can use an HTML form or console prompts to collect the 3 pieces of required information. Name, issue, and steps to reproduce the error.

  Prompt for the User's name
  Prompt for the description of the issue they are experiencing
  Prompt for the steps that can be used to re-produce the user's issue
  If the user enters a blank string for any property, display an alert to let them know all fields must be populated, and then restart the iteration of the loop so they can reenter all 3 fields again.
  Keep prompting the user until all 3 fields are provided otherwise make user start over and enter all 3 fields again.
  Once all 3 values collected, use a template literal that displays the entered information using a confirm dialog box. The confirm box should display the information entered.                
        
       // For this challenge, I didn't use any special libraires or imports; instead, I focused on using my fundementals to make the most out of simple input/button relationships.
       
       const UserFeedBackForm = () =>{
          
          // defining state variables
          const[name, setName] = useState("")
          const [issue, setIssue] =useState("")
          const [steps, setSteps] =useState("")
          const[enteredName, setEnteredName] = useState(false)
          const[enteredIssue, setEnteredIssue] = useState(false)
          const[enteredSteps, setEnteredSteps] = useState(false)
          const [alert, setAlert] = useState("")
          
          // checking what the user is trying to enter (name, issue, or steps taken) then validating to determine if an alert is needed for the user can continue
          
          const checkEntered = (title) => {
              if(title == "name"){
                  if(name.length > 0){
                      setEnteredName(true)
                      setAlert("")
                  }
                  else{
                      setAlert("Please fill out your name")
                  }

              }
              if(title == "issue"){
                  if(issue.length > 0){
                      setEnteredIssue(true)
                      setAlert("")

                  }
                  else{
                      setAlert("Please describe your issue")
                  }

              }
              if(title == "steps"){
                  if(steps.length > 0){
                      setEnteredSteps(true)
                      setAlert("")
                  }
                  else{
                      setAlert("Please describe any steps you've taken")
                  }

              }
          }
          
          // function for resetting the data so that the user can begin again from stracth
          const resetForm = () => {
              setEnteredName(false)
              setName("")
              setEnteredIssue(false)
              setIssue("")
              setEnteredSteps(false)
              setSteps("")
          }
          
          // function for determining which field to show the user (name, issue, steps, or final display of all data entered)
          const DetermineForm=() =>{

              if(enteredName == false){
                  return( <label style={{marginTop:"10px",display: "flex", flexDirection:"column", justifyContent: "center",}}>Name: 
                      <input type="text" onChange={e=> setName(e.target.value)} />
                      <button onClick={()=> checkEntered("name")}>Confirm Name</button>
                  </label>)
                  }
              else if(enteredIssue == false){
                  return( <label style={{marginTop:"10px",display: "flex", flexDirection:"column", justifyContent: "center",}}>Issue: 
                      <textarea type="text" onChange={e=> setIssue(e.target.value)} />
                      <button onClick={()=> checkEntered("issue")}>Confirm Issue</button>
                      <button onClick={()=> setEnteredName(false)}>Back</button>
                  </label>

                  )
              }
              else if(enteredSteps == false){
                  return( <label label style={{marginTop:"10px", display: "flex", flexDirection:"column", justifyContent: "center",}}>Steps Taken: 
                      <textarea type="text" onChange={e=> setSteps(e.target.value)} />
                      <button onClick={()=> checkEntered("steps")}>Confirm Steps </button>
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
                    <h3>
                      Feed-back Form
                      <div style={{marginTop:"10px",width:"300px", height:"300px" , border: "1px solid", display: "flex", flexDirection:"column", justifyContent: "start"}}>

                           {DetermineForm()}
                           {alert}
                      </div>

                  </h3>
              </div>
          )
      }
