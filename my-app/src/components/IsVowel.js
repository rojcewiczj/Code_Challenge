import React from "react";
import {useState} from "react"

const IsVowel = () =>{
    const [vowel, setVowel] = useState("")
    const [vowelResponse, setVowelResponse] = useState("")
    const vowels = ["a","e","i","o","u"]
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
export default IsVowel;