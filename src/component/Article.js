import React, { Component } from 'react'
import data from '../api/related';
import StringParse2 from './StringParse2';
import Slider from "react-slick";

const articleData = data['content'];
const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true
};
export class Article extends Component {
    constructor(){
        super();
    }
   
    render() {
         return (
            <div>
                <section className="article-main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    <div className="offset-lg-4 col-lg-4">
                                        <h2 className="text-25 text-center white-title">
                                            Article
                                        </h2>
                                    </div>
                                </div>
                                <Slider {...settings}>
                                    
                                    {articleData.map((result) => {
                                        const image = result['poster-image'];
                                        return(
                                            <div className="article-slider-main" key={result.id}>
                                                <div className="row no-gutters">
                                                    <div className="col-lg-5 col-md-6 col-12">
                                                        <figure>
                                                            <img className="img-fluid" src={process.env.PUBLIC_URL + `/assets/${image}`} alt="related"/>
                                                        </figure>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 col-12">
                                                        <div className="mx-4 d-block">
                                                            <h2 className="text-25 mb-3 white-title">What is Lorem Ipsum?</h2>
                                                            <div className="article-content">
                                                                <StringParse2 content={result.description} contentLength={1000} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Article
