import React, { Component } from 'react'
import prop_type from 'prop-types'
export default class Navbar extends Component {
    // 类有对象属性和类属性（静态属性：不需要实例化对象就能在外部直接访问到）
    // 方法1:在类的内部定义静态属性
    static propTypes = {//prop-types校验数据类型
        tittle: prop_type.string,
        bool: prop_type.bool,
        name: prop_type.string
    }
    static defaultProps = {//默认值
        bool: true
    }
    render() {
        console.log(this.props)
        let { tittle, bool, name } = this.props
        return (
            <div>
                {bool && <button onClick={() => { this.props.event('子传父的信息') }}>btn</button>}
                navbar组件传值-{tittle};布尔值传递-{String(bool)};state参数传递-{name}
            </div>
        )
    }
}
// 方法2:在类的外部定义静态属性
// Navbar.propTypes = {
//     tittle: prop_type.string,
//     bool: prop_type.bool,
//     name: prop_type.string
// }
