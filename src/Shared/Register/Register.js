import './Register.css';
import React, { Component } from 'react';
class Register extends Component{
    render() {
        return (
            <div className="container register-container">
                <div className="jumbotron col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center mb-4">
                        <input type="text" className="form-control registration text-center" placeholder="First Name" aria-label="Firstname"/>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center mb-4">
                        <input type="text" className="form-control registration text-center" placeholder="Middle Name" aria-label="Middlename"/>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center mb-4">
                        <input type="text" className="form-control registration text-center" placeholder="Last Name" aria-label="Lastname"/>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center mb-4">
                        <input type="text" className="form-control registration text-center" placeholder="User Name" aria-label="Username"/>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center mb-4">
                        <input type="password" className="form-control registration text-center" placeholder="Password" aria-label="Password"/>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center mb-4">
                        <input type="password" className="form-control registration text-center" placeholder="Confirm Password" aria-label="ConfirmPassword"/>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <input id="btnRegister" type="submit" className="btn btn-primary w-100" value="Register" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                Already have an account? Sign in <a href="">here</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register