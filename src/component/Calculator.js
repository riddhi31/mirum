import React, { Component } from 'react'

export class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            amount: "", 
            term: "", //no. year
            rate: "",
            total: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.interestCal = this.interestCal.bind(this);
    }
  
    handleChange(e){
        const re = /^[0-9\b]+$/;
        let target = e.target;
        if (target.value === '' || re.test(target.value)) {
            this.setState({
                [target.name]: target.value
            });
        }
    }

    interestCal(event){
        event.preventDefault();
        let perY = 1 // no. of compoundings per year
        let equation =  (this.state.amount * Math.pow((1 + (this.state.rate/(perY*100))), (perY * this.state.term)));
            this.setState({
            total : equation
        })
    }
    
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
                                        <h2 className="text-25 text-center black-title">
                                            THE LOREM IPSUM CALCULATOR
                                        </h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="offset-lg-1 col-lg-10 col-md-13 col-12">
                                        <div className="calc-bg-box">
                                            <div className="calc-inner">
                                                <div className="row no-gutters">
                                                    <div className="col-12">
                                                        <div className="mb-2 mt-2 d-flex align-items-center">
                                                            <label className="text-22 text-label">
                                                                Amount
                                                            </label>
                                                            <div className="fancy-input">
                                                                <input type="text" id="amount" name="amount" value={this.state.amount} onChange={this.handleChange}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="mb-2 d-flex align-items-center">
                                                            <label className="text-22 text-label">
                                                                Term
                                                            </label>
                                                            <div className="fancy-input-auto">
                                                                <input type="text" id="term" name="term" value={this.state.term} onChange={this.handleChange}/>
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
                                                                <input type="text" id="rate" name="rate" value={this.state.rate} onChange={this.handleChange}/>
                                                            </div>
                                                            <span className="text-22 pre-text ml-2">%</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 cal-btn">
                                                        <button type="button" onClick={this.interestCal}>Calculate</button>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="mb-4 d-flex align-items-center">  
                                                            <label className="text-22 text-label">
                                                                Total
                                                            </label>
                                                            <div className="fancy-input">
                                                                <input type="text" id="total" name="total" value={this.state.total} readOnly disabled/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                        <div className="pipe-left">
                            <img src={process.env.PUBLIC_URL + `/assets/cal-stick.png`} className="img-fluid cal-pipe-left"></img>
                        </div>
                        <div className="pipe-right">
                            <img src={process.env.PUBLIC_URL + `/assets/cal-stick.png`} className="img-fluid cal-pipe-right"></img>
                        </div>
                        <div className="poll-left">
                            <img src={process.env.PUBLIC_URL + `/assets/cal-left-poll.png`} className="img-fluid cal-poll-left"></img>
                        </div>
                        <div className="poll-right">
                            <img src={process.env.PUBLIC_URL + `/assets/cal-right-poll.png`} className="img-fluid cal-poll-right"></img>
                        </div>
         
                    </div>
                </section>
            </div>
        )
    }
}

export default Calculator
