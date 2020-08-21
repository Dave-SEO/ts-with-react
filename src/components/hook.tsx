import React,{useState, FC, useEffect}from 'react'
const HooksMessage:React.FC = ()=>{
    const [obj, setObj] = useState({num: 0})
    console.log(obj)
    console.log(1)
    useEffect(()=>{
        console.log(2)
    })
    console.log(3)
    document.title = obj.num + ''
    return (
    <button onClick={()=> {setObj({num: obj.num + 1})}}>{obj.num}</button>
    )
}
export default HooksMessage