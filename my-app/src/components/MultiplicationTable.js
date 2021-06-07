import React from "react";
import {useState} from "react"

const MultiplicationTable = () =>{

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

    const [table, setTable] = useState(generateTable())
    const [column, setColumn] = useState();
    const [tableNumber, setTableNumber] = useState(1)

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
            <h3>
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
    )
}
export default MultiplicationTable;