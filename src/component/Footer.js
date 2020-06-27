import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="text-center">
                        <div className="footer-social-icons">
                            <a href="https://facebook.com/"><div className="s-icon icon-fb"></div></a>
                            <a href="https://twitter.com/"><div className="s-icon icon-twitter"></div></a>
                            <a href="https://www.linkedin.com/"><div className="s-icon icon-linkedin"></div></a>
                            <a href="https://youtube.com/"><div className="s-icon icon-utube"></div></a>
                        </div>
                        <p><a className="text-18 white" href="#">Disclaimer</a> | <a className="white text-18" href="#">Terms of Use & Privacy Notice</a></p>
                        <p className="white text-18">&copy; 2020 MRIUM. All Rights Reserved</p>
                    </div>
                    
                </footer>
            </div>
        )
    }
}

export default Footer
