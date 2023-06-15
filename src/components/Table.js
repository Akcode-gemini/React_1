import React from 'react'
import '../App.css'
import { useState } from 'react'
export default function Table() {
    const[inpValue,setInpValue]=useState("");
    const[inpArr,setInpArr]=useState([]);
    const insertValue=()=>{
    if (inpValue!==""){
     setInpArr((lastArray)=>[...lastArray,inpValue]);
     setInpValue("");
     console.log(inpArr);
    }
    else{
        alert("Please enter the value");
    }
    }
    const lem=inpArr.length
  return ( 
    <div>
      <input className="mb-3" value={inpValue} onChange={(e) => setInpValue(e.target.value)} placeholder="Enter"  ></input>
      <button className="btn btn-primary m-2"onClick={insertValue}>Add</button>
       <div>
        <table className='table'>
            <thead>
            {lem?(<tr><th>S.No</th>
            <th>Item</th></tr>):""}
            </thead>
          
           <tbody>
        {
            
            inpArr&&inpArr.map((item,index)=>{
                const isFifth=(index+1)%5===0
                const styleClass=isFifth?"blue":""
                return(
                    
                    
                    <tr>
                    <td className={styleClass}>{(index+1)}</td>
                    <td className={styleClass}>{item}</td>
                    </tr>
                    
                    
                    )
                })
        }
        </tbody>
        </table>
       </div>    
    </div>
  )
}
