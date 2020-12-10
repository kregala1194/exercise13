import './Details.css';
import React, { Component } from 'react';
class Details extends Component{
    render() {
        return (
            <div className="container card">
                <div className="card-body row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                        <div className="card w-100">
                            <div className="card-body">
                                <img src="" alt="Watch Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6
                                col-lg-6
                                col-md-12
                                col-sm-12
                                col-12">
                        <div className="row card">
                            <div class="card-body">
                                <h1 class="card-title">Police</h1>
                                <h6 class="card-subtitle">I-202000001</h6>
                                <h6 class="card-subtitle"><em>Sample Description</em></h6>
                                <div className="card-subtitle">
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 px-0">
                                        <p className="mb-0 "><strong>Country</strong></p>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 px-0">
                                        <p className="mb-0">Sample Country</p>
                                    </div>
                                </div>
                                <div className="card-subtitle">
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 px-0">
                                        <p className="mb-0"><strong>Case Material</strong></p>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 px-0">
                                        <p className="mb-0">Sample Case Material</p>
                                    </div>
                                </div>
                                <div className="card-subtitle">
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 px-0">
                                        <p className="mb-0"><strong>Watch Clasp</strong></p>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 px-0">
                                        <p className="mb-0">Sample Watch Clasp</p>
                                    </div>
                                </div>
                                <div className="card-subtitle">
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 px-0">
                                        <p className="mb-0"><strong>Watch Face</strong></p>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 px-0">
                                        <p className="mb-0">Sample Watch Face</p>
                                    </div>
                                </div>
                                <div className="card-subtitle">
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 px-0">
                                        <p className="mb-0"><strong>Watch Movement</strong></p>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 px-0">
                                        <p className="mb-0">Sample Watch Movement</p>
                                    </div>
                                </div>
                                <div className="card-subtitle">
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 px-0">
                                        <p className="mb-0"><strong>Water Resistance</strong></p>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 px-0">
                                        <p className="mb-0">Sample Watch Resistance</p>
                                    </div>
                                </div>
                                <div className="card-subtitle">
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 px-0">
                                        <p className="mb-0"><strong>Watch Strap</strong></p>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 px-0">
                                        <p className="mb-0">Sample Watch Strap Name</p>
                                    </div>
                                </div>
                                <div className="card-subtitle">
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 px-0">
                                        <p className="mb-0"><strong>Warranty</strong></p>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 px-0">
                                        <p className="mb-0">Sample Watch Warranty</p>
                                    </div>
                                </div>
                                <div className="card-subtitle">
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 px-0">
                                        <p className="mb-0"><strong>Price</strong></p>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 px-0">
                                        <h3>PHP 10,000.00</h3>
                                    </div>
                                </div>
                                <div className="card-subtitle">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                                        <a className="btn btn-item btn-success" id="btnEdit" href="">
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                            <span className="btn-item-vertical-line"></span>
                                            &nbsp;&nbsp;Edit Item&nbsp;&nbsp;
                                        </a>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                                        <a className="btn bg-red btn-danger" id="btnDelete">
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                            <span className="btn-item-vertical-line"></span>
                                            Delete Item
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Details