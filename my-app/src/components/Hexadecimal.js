import React from "react";
import {nameToColor} from './ColorList'
import {useState} from 'react'
const Hexidecimal = () =>{

    function isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char)
      }

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
    
    const [hex, setHex] = useState("")
    const [hexResponse, setHexResponse] = useState("")
    const hexToColor = createHexToColor();
    
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

export default Hexidecimal;