import './WatchCard.css';
import React, { Component } from 'react';
class WatchCard extends Component{
    render() {
        return (
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 py-15 pt-2">
                <div className="card">
                    <img className="card-img-top w-100 rounded mb-2" src="" alt="Card image cap"/>
                    <div className="card-body text-center">
                        <p className="card-text"><a href="/Details">Click to view details</a></p>
                        <p className="card-text">I-2020000012</p>
                        <p className="card-text">PHP 10,000.00</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default WatchCard