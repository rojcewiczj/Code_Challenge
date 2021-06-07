import React from "react";
import {useState} from "react"

const UserFeedBackForm = () =>{
    
    const[name, setName] = useState("")
    const [issue, setIssue] =useState("")
    const [steps, setSteps] =useState("")
    const[enteredName, setEnteredName] = useState(false)
    const[enteredIssue, setEnteredIssue] = useState(false)
    const[enteredSteps, setEnteredSteps] = useState(false)
    const [alert, setAlert] = useState("")
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

export default UserFeedBackForm;