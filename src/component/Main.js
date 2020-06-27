import React, { Component } from 'react'
import Banner from './Banner'
import Header from './Header'
import Calculator from './Calculator'
import Related from './Related'
import Article from './Article'
import Footer from './Footer'

export class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Calculator/>
                <Article/>
                <Related/>
                <Footer/>
            </div>
        )
    }
}

export default Main
