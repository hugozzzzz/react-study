import React, { Component } from 'react'

export default class APP extends Component {
    // react并不会真正的绑定事件到每一个具体的元素，而是采用事件代理的模式
    name = 'hugo'
    render() {
        return (
            <div>
                {/* 处理逻辑多的话，不推荐 */}
                <button onClick={() => { console.log('click1', this.name) }}>btn逻辑多不推荐</button>
                {/* 非箭头函数存在this指向问题，不推荐  */}
                <button onClick={this.clickFun1.bind(this)}>btn不推荐</button>
                {/* 箭头函数推荐,比如点击方法存在默认参数建议选这种 */}
                <button onClick={this.clickFun2}>btn推荐</button>
                {/* 比较推荐，传参（自定义的参数类型） */}
                <button onClick={() => { this.clickFun3(this.name) }}>btn传参推荐</button>
            </div>
        )
    }
    clickFun1() {
        console.log('click2', this.name)
    }
    clickFun2 = (ev) => {
        console.log('click3', this.name, ev.target)
    }
    clickFun3 = (a) => {
        console.log(a)
        console.log('click4', this.name)
    }
}
