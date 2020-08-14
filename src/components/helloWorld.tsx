import React,{FC} from 'react'

interface IHello{
    message?: string
}
const HelloWorld:FC<IHello> = (props)=>(
<div>{props.message}</div>
)
HelloWorld.defaultProps ={
    message: "Hello"
}
export default HelloWorld