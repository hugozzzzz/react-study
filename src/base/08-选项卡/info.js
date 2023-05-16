import React, { Component } from 'react'
import axios from 'axios'
import '../css/index.css'
import BetterScroll from 'better-scroll'
export default class info extends Component {
    constructor() {
        super()
        this.state = {
            infoList: [],
            defaultList: [],
            in_value: ""
        }
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=3857316',
            method: 'get',
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.0", "e": "1651590295853336987271169", "bc": "310100" }',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            this.setState({
                infoList: res.data.data.cinemas,
                defaultList: res.data.data.cinemas
            })
            new BetterScroll(".scrollClass")
        })
    }
    render() {
        return (
            <div>
                {/* 受控组件 */}
                <input value={this.state.in_value} onChange={(ev) => {
                    this.setState({
                        in_value: ev.target.value
                    })
                }} style={{ height: '30px', width: '100%' }}></input>
                {/* <input onChange={this.changeValue} style={{ height: '30px', width: '100%' }}></input> */}
                <div className='scrollClass' style={{ background: '#DFE1E5', height: '500px', overflow: 'hidden' }}>
                    <ul style={{ padding: '0px' }}>
                        {/* {this.state.infoList.map((item, index) => {
                            return <li className='li_class' key={item.cinemaId}>
                                <b>{item.name}</b>
                                <i>{item.address}</i>
                            </li>
                        })} */}
                        {this.getInfoList().map((item, index) => {
                            return <li className='li_class' key={item.cinemaId}>
                                <b>{item.name}</b>
                                <i>{item.address}</i>
                            </li>
                        })}
                    </ul>

                </div>
            </div>
        )
    }
    getInfoList = () => {
        return this.state.defaultList.filter((item) => {
            return item.name.toUpperCase().includes(this.state.in_value.toUpperCase())
                || item.address.toUpperCase().includes(this.state.in_value.toUpperCase())
        })
    }
    changeValue = (ev) => {
        console.log(ev.target.value)
        var newList = this.state.defaultList.filter((item) => {
            return item.name.toUpperCase().includes(ev.target.value.toUpperCase())
                || item.address.toUpperCase().includes(ev.target.value.toUpperCase())
        })
        console.log(newList.length)
        this.setState({
            infoList: newList
        }, () => {

        })

    }
}
