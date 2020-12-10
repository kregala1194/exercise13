import './Home.css';
import React, { Component } from 'react';
import $ from 'jquery';
import WatchList from '../WatchList/WatchList';
class Home extends Component{
    componentDidMount() {
        $('.carousel').carousel({
            interval: 2000
        });
    }
    render() {
        let CarouselOne = require('../Images/CarouselOne.jpg');
        let CarouselTwo = require('../Images/CarouselTwo.jpg');
        let CarouselThree = require('../Images/CarouselThree.jpg');
        let CarouselFour = require('../Images/CarouselFour.jpg');
        let CarouselFive = require('../Images/CarouselFive.jpg');
        return (
            <div className="container mt-3 mb-3">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block mx-auto img-fluid w-100 h-50" src={CarouselOne.default} alt="POLICE Watch"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block mx-auto img-fluid w-100 h-50"  src={CarouselTwo.default} alt="TITAN Watch"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block mx-auto img-fluid w-100 h-50"  src={CarouselThree.default} alt="CCCP Watch"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block mx-auto img-fluid w-100 h-50"  src={CarouselFour.default} alt="Thomas Earnshaw"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block mx-auto img-fluid w-100 h-50"  src={CarouselFive.default} alt="Milliot & Co. Watch"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <WatchList />
            </div>
        )
    }
}
export default Home