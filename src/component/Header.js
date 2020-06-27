import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg static-top trans-nav">
                    <div className="container-fluid">
                        <a className="navbar-brand ml-auto logo-img" href="#">
                            <img className="" src={process.env.PUBLIC_URL + `/assets/logo.png`} alt="Murium"  />
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
