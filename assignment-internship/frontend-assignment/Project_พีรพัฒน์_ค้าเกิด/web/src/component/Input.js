import React,{useState} from 'react'
import {  useNavigate } from "react-router-dom";
import '../App.css';


function Input() {
    const [input,setInput]=useState('')
    
    const navigate =useNavigate()

    const onChange=(event)=>{
        setInput(event.target.value)
    }

    const onKeyDown=(event)=>{
        const word=event.target.value
        
        if(event.key==="Enter"&&word){
           
            navigate(`search/${word}`)
            
        }else
        if(event.key==="Enter"&&!word){
            
            navigate(`/`)
        }
    }

    return(
        <div className='Input'>
            <div className='Input__header'>
                <h1>เที่ยวไหนดี</h1>
            </div>
            <input placeholder='หาที่เที่ยวแล้วไปกัน...' className='Input__field' type='text' value={input} onChange={onChange} onKeyDown={onKeyDown} />
            
        </div>
)
}
export default Input