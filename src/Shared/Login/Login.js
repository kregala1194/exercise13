import './Login.css';
import React, { Component } from 'react';
class Login extends Component{
    render() {
        return (
            <div className="wrapper">
                <div id="formContent">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <i className="input-group-text fa fa-user"></i>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <i className="input-group-text fa fa-lock"></i>
                        </div>
                        <input type="password" className="form-control" placeholder="Password" aria-label="Password"/>
                    </div>
                    <button type="button" className="btn btn-primary w-100">Login</button>
                    <div className="text-white mt-3">
                        No account yet? Sign up <a href="">here</a>.
                    </div>
                </div>
            </div>
        )
    }
}
export default Login