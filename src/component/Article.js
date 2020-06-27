import React, { Component } from 'react'
import ReadMoreReact from 'read-more-react';

export class Article extends Component {
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
                                <div className="row no-gutters">
                                    <div className="col-lg-5 col-md-6 col-12">
                                        <figure>
                                            <img src="img-fluid" src={process.env.PUBLIC_URL + `/assets/article-thumb.png`} alt="related"/>
                                        </figure>
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-12">
                                        <div className="ml-4">
                                            <h2 className="text-25 white">What is Lorem Ipsum?</h2>
                                            <ReadMoreReact text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                                min="80" ideal="100" max="200"
                                                readMoreText="Read More"/>
                                        </div>
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

export default Article
