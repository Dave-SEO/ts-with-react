import React,{useState, useEffect} from 'react'
const useMouseFn = () =>{
    const [position, setPosition] = useState({x:0, y: 0})
    useEffect(()=>{
        let updataMouse = (e: MouseEvent)=>{
            setPosition({x:e.clientX, y:e.clientY})
            console.log({x:e.clientX, y:e.clientY})
        }
        document.addEventListener('click', updataMouse)
        // 可返回函数
        return ()=>{
            document.removeEventListener('click', updataMouse)
        }
    })
    return position
}
export default useMouseFn