import React, { Component } from 'react'
import Banner from './Banner'
import Header from './Header'
import Calculator from './Calculator'

export class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Calculator/>
            </div>
        )
    }
}

export default Main
