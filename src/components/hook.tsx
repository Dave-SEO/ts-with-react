import React,{useState, FC, useEffect, useRef, useContext}from 'react'
import {ThemContext} from '../App'
const HooksMessage:React.FC = ()=>{
    const ThemContextStyle = useContext(ThemContext)
    console.log('ThemContextStyle', ThemContextStyle)
    const [obj, setObj] = useState({num: 0})
    console.log(obj)
    const useRefs = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        console.log(2)
        if(useRefs && useRefs.current){
            console.log('useRefs', useRefs.current)
            useRefs.current.style.border = '1px solid red'
        }
    })
    console.log(3)
    document.title = obj.num + ''
    return (
        <div>
            <input type='text' style={ThemContextStyle} ref={useRefs}/>
            <button onClick={()=> {setObj({num: obj.num + 1})}}>{obj.num}</button>
        </div>
    )
}
export default HooksMessage