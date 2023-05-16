import React, { useState, useEffect, useCallback } from 'react'

export default function App() {
    const [name, setName] = useState('hugo')
    const [count, setCount] = useState(0)
    useEffect(() => {
        setName(name.substring(0, 1).toUpperCase() + name.substring(1))
    }, [name])
    const getValue = (ev) => {
        setName(ev.target.value)
    }
    var myCount = 0
    return (
        <div>
            {name}
            <input onChange={getValue}></input>
            <button onClick={() => {
                setName('eeeeel')
            }}>btn</button><br></br>
            {name == 'Hugo' && <Child></Child>}
            {count}-{myCount}
            <button onClick={() => {
                setCount(count + 1)
                myCount++
            }}>add</button>
        </div>
    )
}
function Child() {
    useEffect(() => {
        window.onresize = () => {
            console.log('尺寸变化')
        }
        var timer = setInterval(() => {
            console.log(111)
        }, 1000)
        // 回调函数清空==类组件中的销毁生命周期
        return () => {
            console.log('销毁')
            window.onresize = null
            clearInterval(timer)
        }
    }, [])
    return (
        <div>child</div>
    )
}

