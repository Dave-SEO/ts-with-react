import React, {useState,useEffect,FC} from 'react'

const MouseMove:FC = ()=>{
    const [position, setPosition] = useState({x:0, y: 0})
    const [count, setCount] = useState(0)
    useEffect(()=>{
        let updataMouse = (e: MouseEvent)=>{
            setPosition({x:e.clientX, y:e.clientY})
            console.log({x:e.clientX, y:e.clientY})
        }
        document.addEventListener('click', updataMouse)
        setInterval(()=>{
            setCount(count + 1)
        }, 1000)
        // 可返回函数
        return ()=>{
            document.removeEventListener('click', updataMouse)
        }
    },[])
    return (
        <div>
             <div>x:{position.x}, y:{position.y}</div>
             <div>count: {count}</div>
        </div>
    )
}
export default MouseMove