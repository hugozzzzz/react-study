import React from 'react'
import prop_type from 'prop-types'

export default function Sidebar(props) {
    let { color, status } = props
    return (
        <div>
            <ul style={{ color: color }}>
                <li>{status}</li>
                <li>Sidebar</li>
            </ul>
        </div>
    )
}
//函数式组件不像类组件有类属性，所以只能再外部添加
Sidebar.propTypes = {
    color: prop_type.string,
}
Sidebar.defaultProps = {
    color: 'blue',
}