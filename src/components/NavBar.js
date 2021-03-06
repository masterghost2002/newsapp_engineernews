import React, { Component } from 'react'
import Category from './Category';
import { Link } from 'react-router-dom';
export class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.props.viewMode} bg-${this.props.viewMode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News Engineer</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                                </li>
                                <li className="nav-item">
                                </li>
                            </ul>
                            <Category viewMode={this.props.viewMode} handleClick={this.props.changeCategory.bind(this)} />
                            <div className={`form-check form-switch text-${this.props.viewMode === "light" ? "dark" : "light"}`}>
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggleMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{this.props.switchTxt}</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
