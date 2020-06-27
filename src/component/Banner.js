import React, { Component } from 'react'
import ModalVideo from 'react-modal-video'

export class Banner extends Component {
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
    
    openModal () {
        this.setState({isOpen: true})
    }
    render() {
        return (
            <div>
                <section className="web-banner">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-5 offset-md-2 col-md-5">
                                <div className="web-text">
                                    <h1 className="text-60">Lorem Ipsum</h1>
                                    <p className="text-30">dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="portrait-img">
                            <img className="img-fluid" src={process.env.PUBLIC_URL + `/assets/character.png`} alt="MS Dhoni" />
                        </div>
                        <div className="row">
                            <div className="offset-xl-4 col-xl-3 offset-lg-4 col-lg-3 offset-md-4 col-md-3">
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='3f_FkgXzC1U' onClose={() => this.setState({isOpen: false})} />
                                <div className="thum-box" onClick={this.openModal} >
                                    <img className="img-fluid icon-youtube" src={process.env.PUBLIC_URL + `/assets/play-button.png`} alt="" />
                                    <div className="img-overlay">
                                        <img className="youtube-thumb" src={process.env.PUBLIC_URL + `/assets/video-thumb.png`} alt="youtube Button" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cloud-left">
                            <img src={process.env.PUBLIC_URL + `/assets/cloud.png`} className="img-fluid small-left"></img>
                        </div>
                        <div className="cloud-right">
                            <img src={process.env.PUBLIC_URL + `/assets/cloud.png`} className="img-fluid small-right"></img>
                        </div>
                    </div>                    
                </section>
                
            </div>
        )
    }
}

export default Banner
