import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {App} from "../App";

window.onload = () => {
    ReactDOM.hydrate(<App/> , document.querySelector('#react_root'))
}