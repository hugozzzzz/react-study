import React from 'react'
import { HashRouter as Routers, Redirect, Route, Switch } from 'react-router-dom'
import One from '../view/one'
import Two from '../view/two'
import Three from '../view/three'
import Notfound from '../view/Notfound'

export default function demo() {
    return (
        <div>
            <Routers>
                <Switch>
                    <Route path="/one" component={One}></Route>
                    <Route path="/two" component={Two}></Route>
                    <Route path="/three" component={Three}></Route>
                    {/* //重定向,exact精准匹配 */}
                    {/* <Route component={Notfound}></Route> */}
                    <Redirect from='/' to="/One" exact></Redirect>

                </Switch>
            </Routers>
        </div>
    )
}
