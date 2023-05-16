import React, { Component } from 'react'
import Navbar from './Navbar/index'
import Sidebar from './Sidebar/index'
export default class App extends Component {
    state = {
        name: 'hugo',
        status: ''
    }
    render() {
        let obj = {
            tittle: 'sss',
            name: 'sss'
        }
        return (
            <div>
                {this.state.status}
                <div>
                    首页
                    <Navbar tittle='首页' bool={false} name={this.state.name}></Navbar>
                </div>
                <div>
                    扉页
                    <Navbar tittle='扉页' event={this.giveChild}></Navbar>
                </div>
                <div>
                    尾页
                    <Navbar tittle='尾页'></Navbar>
                </div>
                <div>
                    尾页
                    <Navbar {...obj}></Navbar>
                </div>
                <div>
                    <Sidebar color='red' status={this.state.status}></Sidebar>
                </div>
                <div>
                    <Sidebar></Sidebar>
                </div>
            </div>
        )
    }
    giveChild = (ev) => {
        console.log(ev)
        this.setState({
            status: ev
        })
    }
}