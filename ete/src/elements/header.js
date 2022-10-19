import React, { Component } from 'react';
import {Link, Redirect, NavLink} from "react-router-dom";
import TitleComponent from "../pages/title";


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.handleClickLogout = this.handleClickLogout.bind(this)
    }

    state = {
        toDashboard: false,
    };

    handleClickLogout(){
        localStorage.removeItem('token');
        localStorage.setItem('isLoggedIn', false);
        this.setState({ toDashboard: true });
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                <TitleComponent title="React CRUD Login "></TitleComponent>

                {/* <Link to={'/'} className="navbar-brand mr-1">Student</Link>

                <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle">
                    <i className="fas fa-bars"></i>
                </button> */}
                
                



                

                <div className="container">
        <Link className="navbar-brand" to="/">
          <img 
          style={{
            height:"40px"
          }} src={require('../logo.png')} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/dashboard">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Contact">
                Contact
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/register">
                Signup
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/index">
                Student Info
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/fileupload">
                Image Upload
              </NavLink>
            </li>
          </ul>
        </div>

      </div>








                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." aria-label="Search"
                               aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                    </div>
                </form>

                <ul className="navbar-nav ml-auto ml-md-0">
                    <li className="nav-item dropdown no-arrow">
                        <Link to={'#'} className="nav-link dropdown-toggle" id="userDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user-circle fa-fw"></i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <Link to={'#'} className="dropdown-item">Settings</Link>
                            <Link to={'#'} className="dropdown-item">Activity Log</Link>
                            <div className="dropdown-divider"></div>
                            <Link to={'#'} onClick={this.handleClickLogout} className="dropdown-item" data-toggle="modal" data-target="#logoutModal">Logout</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}
