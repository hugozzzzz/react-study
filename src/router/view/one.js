import React from 'react'
import Wall1 from './wall/wall1'
import Wall2 from './wall/wall2'
import Wall3 from './wall/wall3'
import Notfound from './Notfound'

import { HashRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom'

export default function One(prop) {
    const message = '这是路由传过来的消息'
    const id = 110
    const isTrue = true
    return (
        <div>
            <div style={{ width: '100%', height: '100px', backgroundColor: 'yellow' }}>这是一个轮播</div>
            <div>
                导航栏
                <ul>
                    <li>
                        <NavLink to='/One/Wall1'>声明式跳转到wall1</NavLink>
                        <NavLink to={`/One/Wall1/${id}/${message}`}> params传值</NavLink>
                        <NavLink to={`/One/Wall1?info=${message}&id=${id}`}> search传值</NavLink>
                        <NavLink to={{ pathname: '/One/Wall1', state: { id: id, info: message } }}> state</NavLink>
                    </li>
                    <li>
                        <button onClick={() => {
                            prop.history.push('/One/Wall2')
                        }}>编程式跳转wall2</button>
                        <button onClick={() => {
                            prop.history.push({ pathname: '/One/Wall2', query: { id: id, info: message } })
                        }}>query传值</button>
                        <button onClick={() => {
                            prop.history.push({ pathname: '/One/Wall2', state: { id: id, info: message } })
                        }}>state传值</button>
                    </li>
                    <li>
                        <button onClick={() => {
                            prop.history.push('/One/Wall3')
                        }}>编程式跳转wall3</button>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route path='/One/Wall1/:id/:info' component={Wall1}></Route>
                <Route path='/One/Wall1' component={Wall1}></Route>
                <Route path='/One/Wall2' component={Wall2}></Route>
                <Route path='/One/Wall3' render={(prop) => isTrue ? <Wall3 {...prop}></Wall3> : <Notfound></Notfound>} />
                <Redirect from='/One/' to='/One/Wall1'></Redirect>

            </Switch>
        </div >
    )
}
