import React, { Component } from 'react'

export default class APP extends Component {
    text = '收藏'
    state = {
        love: true,
        list: ['1', '2', '3']
    }
    my_ref = React.createRef()
    render() {
        return (
            // React不是vue的双向绑定，数据变化了界面不会同步更新
            // <button onClick={() => { this.changeText() }}>{this.text}</button>
            <div>
                {/* <button onClick={() => {
                    this.setState({
                        love: !this.state.love
                    })
                    if (this.state.love) {
                        console.log('收藏')
                    } else {
                        console.log('取消收藏')
                    }
                }}>{this.state.love == true ? '收藏' : '取消收藏'}</button> */}
                <input ref={this.my_ref}></input>
                <button onClick={() => {
                    var text = this.my_ref.current.value
                    var newList = [...this.state.list]
                    newList.push(text)
                    this.setState({
                        list: newList
                    })
                }}>add</button>
                <ul>
                    {this.state.list.map((item, index) =>
                        <li key={index}>
                            {/* {item} */}
                            {/* html语言字符串转换执行 */}
                            <span dangerouslySetInnerHTML={
                                { __html: item }
                            }></span>
                            <button onClick={() => { this.delNode(index) }}>del</button>
                        </li>
                    )}
                </ul>
                {this.state.list.length === 0 ? <div>暂无</div> : null}
            </div>

        )
    }
    delNode = (index) => {
        console.log(index)
        var newList = [...this.state.list]
        console.log(newList)
        newList.splice(index, 1)
        console.log(newList)
        this.setState({
            list: newList
        })
    }
    changeText = () => {
        if (this.text == '取消收藏') {
            this.text = '收藏'
            console.log(this.text)
        } else if (this.text == '收藏') {
            this.text = '取消收藏'
            console.log(this.text)
        }
    }
}
