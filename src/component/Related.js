import React, { Component } from 'react'

export class Related extends Component {
    render() {
        return (
            <div>
                <div className="clear"></div>
                <section className="related-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    <div className="offset-lg-4 col-lg-4">
                                        <h2 className="text-25 text-center black-title">
                                            Related
                                        </h2>
                                    </div>
                                </div>
                            
                                <div className="row">
                                    <div className="offset-lg-2 col-lg-4 col-md-3 col-12">
                                        <figure className="text-center">
                                            <img src="img-fluid" src={process.env.PUBLIC_URL + `/assets/related-1.png`} />
                                            <figcaption className="text-30">SPACE IPSUM</figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <figure className="text-center">
                                            <img src="img-fluid" src={process.env.PUBLIC_URL + `/assets/related-2.png`} />
                                            <figcaption className="text-30">ZOMBIE IPSUM</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Related
