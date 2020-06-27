import React, { Component } from 'react'

export class Calculator extends Component {
    render() {
        return (
            <div>
                <div className="clear"></div>
                <section className="calc-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    <div className="offset-lg-4 col-lg-4">
                                        <h2 className="text-25 text-center">
                                            THE LOREM IPSUM CALCULATOR
                                        </h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="offset-lg-2 col-lg-8">
                                        <div className="calc-bg-box">
                                            <div className="calc-inner">
                                                <form className="" id="">
                                                    <div className="row no-gutters">
                                                        <div className="col-12">
                                                            <div className="mb-2 mt-2 d-flex align-items-center">
                                                                <label className="text-22 text-label">
                                                                    Amount
                                                                </label>
                                                                <div className="fancy-input">
                                                                    <input type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="mb-2 d-flex align-items-center">
                                                                <label className="text-22 text-label">
                                                                    Term
                                                                </label>
                                                                <div className="fancy-input-auto">
                                                                    <input type="text" />
                                                                </div>
                                                                <span className="text-22 pre-text">Years</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="mb-2 br-left d-flex align-items-center">
                                                                <label className="text-22 pre-rate">
                                                                    Rate
                                                                </label>
                                                                <div className="fancy-input-auto border-0">
                                                                    <input type="text" />
                                                                </div>
                                                                <span className="text-22 pre-text ml-2">%</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 cal-btn">
                                                            <button type="button">Calculate</button>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="mb-2 d-flex align-items-center">  
                                                                <label className="text-22 text-label">
                                                                    Total
                                                                </label>
                                                                <div className="fancy-input">
                                                                    <input type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </form>
                                            </div>
                                        </div>
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

export default Calculator
