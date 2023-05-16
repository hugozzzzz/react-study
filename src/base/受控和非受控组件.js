import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        name: 'hugo'
    }
    // 使用ref的非受控组件
    // myref = React.createRef()
    render() {
        return (
            <div>
                <h2>登陆页</h2>
                <input value={this.state.name} onChange={(ev) => [
                    this.setState({
                        name: ev.target.value
                    })
                ]}></input>
                <button onClick={() => {
                    console.log(this.state.name)
                }}>登录</button>
                <button onClick={() => {
                    this.setState({
                        name: 'hugo'
                    })
                }}>重置</button>
            </div>
            // <div>
            // {/* 非受控组件 */}
            //     <h2>登陆页</h2>
            //     <input ref={this.myref} defaultValue='hugo'></input>
            //     <button onClick={() => {
            //         console.log(this.myref.current.value)
            //     }}>登录</button>
            //     <button onClick={() => {
            //         this.myref.current.value = 'hugo'
            //     }}>重置</button>
            // </div>
        )
    }
}
