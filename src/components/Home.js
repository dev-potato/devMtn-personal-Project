import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Home extends Component {
    render() {
        return(
            <div className='home'>
            <Navbar />
            <div>Hello</div>
            </div>
        )
    }
}