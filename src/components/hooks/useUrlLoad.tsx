 import React, {useEffect, useState, FC} from 'react'
 import axios from 'axios'
 /**
  * useEffect 指定什么时候发送请求
  * useState 指定状态
  * url https://dog.ceo/api/breeds/image/random
  */
 const useUrlLoad = (url: string, deps: any[] = []) =>{
    const [loadiing, setLoading] = useState(false)
    const [data, setData] = useState<any>(null)
    useEffect(()=>{
        setLoading(true)
        axios.get(url).then((res)=>{
            setLoading(false)
            setData(res.data)
        })
    }, deps)
    return [data, loadiing]
 }
 export default useUrlLoad