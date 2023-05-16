import React, { Component } from 'react'

export default class APP extends Component {
    my_text = React.createRef()
    render() {
        return (
            <div>
                {/* <input ref="my_input"></input> */}
                <input ref={this.my_text}></input>
                <button onClick={() => {
                    // this.fun1()
                    this.fun2()
                }}>add</button>
            </div>
        )
    }
    fun1 = () => {
        // 已经弃用
        console.log(this.refs.my_input.value)
    }
    fun2 = () => {
        console.log(this.my_text)
    }
}
