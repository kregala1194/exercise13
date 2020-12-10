import './About.css';
import React, { Component } from 'react';
class About extends Component{
    render() {
        let WatchAbout1 = require('../Images/WatchAbout.jpg');
        let WatchAbout2 = require('../Images/WatchAbout2.jpg');
        let WatchAbout3 = require('../Images/WatchAbout3.jpg');
        return (
            <div className="container mb-3">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-0 d-flex justify-content-center mt-3">
                        <img src={WatchAbout1.default} alt="WatchBG" className="w-100 h-100"/>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="center mt-5">
                            <h1 className="text-white header-name">Where can I get some?</h1>
                            <h6 className="text-white subheader-name">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-2">
                        <div className="center">
                            <h1 className="text-white header-name">Who are we?</h1>
                            <h6 className="text-white subheader-name">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </h6>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-0">
                                <img src={WatchAbout2.default} alt="WatchBG" className="w-100 h-100"/>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-0">
                                <img src={WatchAbout3.default} alt="WatchBG" className="w-100 h-100"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default About