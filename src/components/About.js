import React, { Component } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props);
    }
    darkStyle = {
        color: 'white',
        backgroundColor: '#28282B'
    }
    lightStyle = {
        color: 'black',
        backgroundColor: 'white'
    }
    render() {
        return (
            <>
                <div className='container' style={this.props.defaultMode === 'light' ? this.lightStyle : this.darkStyle}>
                    <h1 style={{marginTop: '90px'}}>About Us</h1>
                    <div className="accordion" id="accordionPanelsStayOpenExample" >
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={this.props.defaultMode === 'light' ? this.lightStyle : this.darkStyle}>
                                    <strong>Analyze News</strong>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body" style={this.props.defaultMode === 'light' ? this.lightStyle : this.darkStyle}>
                                    <strong>Information about something that has happened recently.</strong>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={this.props.defaultMode === 'light' ? this.lightStyle : this.darkStyle}>
                                    <strong> About NewsEngineer</strong>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body" style={this.props.defaultMode === 'light' ? this.lightStyle : this.darkStyle}>
                                    <strong>News Engineer is a free to use News App with zero ads. Make you upto date with daily top headlines. News Engineer is an open-source project based on React and BootStrap</strong>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={this.props.defaultMode === 'light' ? this.lightStyle : this.darkStyle}>
                                    <strong>Browser Compatible </strong>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body" style={this.props.defaultMode === 'light' ? this.lightStyle : this.darkStyle}>
                                    <strong> This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong>
                                </div>
                            </div>
                        </div>
                    </div></div>
            </>
        )
    }
}
