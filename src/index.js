// console.log("hello world hugo")
import React from 'react'
import ReactDOM from 'react-dom'
// import APP from './04-router/demo'
import APP from './antd/antd'
import 'antd/dist/antd.css';

// ReactDOM.render(React.createElement("div", {
//   id: 'id',
//   className: 'name'
// }, 'hugo'), document.getElementById("root"))
ReactDOM.render(
  // <React.StrictMode>
  <APP></APP>
  // </React.StrictMode>
  , document.getElementById("root"))