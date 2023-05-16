import React, { Component } from 'react'
import '../css/index.css'
import Center from './center'
import Info from './info'
import Movies from './movies'
export default class APP extends Component {
    state = {
        list: [
            { id: 1, name: '电影' },
            { id: 2, name: '咨询' },
            { id: 3, name: '我的' },
        ],
        current: 1
    }
    which = () => {
        switch (this.state.current) {
            case 1:
                return <Movies></Movies>
            case 2:
                return <Info></Info>
            case 3:
                return <Center></Center>
            default:
                return null
        }
    }
    render() {
        return (
            <div>
                {/* {this.state.current === 1 ? <Movies></Movies> : null}
                {this.state.current === 2 ? <Info></Info> : null}
                {this.state.current === 3 ? <Center></Center> : null} */}
                {this.which()}
                <ul className='tab_class'>
                    {this.state.list.map((item, index) => {
                        return <li key={item.id}
                            className={this.state.current === item.id ? 'active' : ''}
                            onClick={() => {
                                this.setState({
                                    current: item.id
                                })
                            }}>
                            {item.name}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
