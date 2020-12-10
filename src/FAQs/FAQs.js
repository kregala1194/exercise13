import './FAQs.css';
import React, { Component } from 'react';
class FAQs extends Component{
    render() {
        return (
            <div className="container mb-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 px-0 d-flex justify-content-center mt-3">
                    <img src="~/Content/Images/WatchFAQs.jpg" alt="WatchBG" className="w-100 h-100"/>
                </div>
                <div className="row  d-flex justify-content-center mt-3">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 offset-xl-faq offset-lg-faq offset-md-faq offset-sm-faq offset-faq text-center text-white">
                        <h1 className="mb-4">We're here to help</h1>
                        <input type="text" className="form-control form-control-lg text-faq text-center" placeholder="Lorem Ipsum" />
                    </div>
                </div>
            </div>
        )
    }
}
export default FAQs