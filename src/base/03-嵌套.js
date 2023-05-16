import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>child</div>
        )
    }
}
class Head extends Component {
    render() {
        return (
            <div>
                head
                <Child></Child>
            </div>
        )
    }
}
function Body() {
    return (
        <div>body</div>
    )
}
const Foot = () => <div>foot</div>

export default class App extends Component {
    render() {
        return (
            <div>
                <Head></Head>
                <Body></Body>
                <Foot></Foot>
            </div>
        )
    }
}
