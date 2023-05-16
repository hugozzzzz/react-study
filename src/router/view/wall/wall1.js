import React from 'react'

export default function wall1(prop) {
    console.log("param传值:", prop.match.params)
    console.log("search传值:", prop.location.search)
    console.log("state传值:", prop.location.state)
    return (
        <div>
            wall1
        </div>
    )
}
