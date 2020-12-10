import './WatchList.css';
import React, { Component } from 'react';
import WatchCard from '../WatchCard/WatchCard';
class WatchList extends Component{
    render() {
        let arrayCards = [];
        let numberOfCards = 10;
        for(let x = 0;x < numberOfCards; x++) {
            arrayCards.push(<WatchCard key={x}/>)
        }
        return (
            <div className="row pt-2">
                {arrayCards}
            </div>
        )
    }
}
export default WatchList