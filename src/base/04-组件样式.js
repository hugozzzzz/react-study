import React, { Component } from 'react'
import './css/index.css'//导入，webpack支持
export default class APP extends Component {
    render() {
        var name = 'hugo'
        var jack = 'jack'
        var css = {
            background: 'blue', color: 'white'
        }
        return (
            <div>
                {/* react推荐行内样式 */}
                <div style={css}>{name}</div>
                <div className='active'>{jack}</div>
                <label htmlFor="youname">名字：</label>
                <input type="text" id="youname"></input>
            </div>
        )
    }
}
