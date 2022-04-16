import React, { Component } from 'react'

export default class Category extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <button type="button" className={`btn text-${this.props.viewMode=="light"?"dark":"white"}`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                   Select Category
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className={`modal-content bg-${this.props.viewMode=="light"?"light":"dark"} text-${this.props.viewMode=="light"?"dark":"white"}`}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">News Category</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <button type="button" className={`btn btn-${this.props.viewMode=="light"?"dark":"light"} mx-3 my-1 `} onClick={()=>this.props.handleClick("science")}>Science</button>
                            <button type="button" className={`btn btn-${this.props.viewMode=="light"?"dark":"light"} mx-3 my-1`} onClick={()=>this.props.handleClick("sports")}>Sports</button>
                            <button type="button" className={`btn btn-${this.props.viewMode=="light"?"dark":"light"} mx-3 my-1`} onClick={()=>this.props.handleClick("business")}>Business</button>
                            <button type="button" className={`btn btn-${this.props.viewMode=="light"?"dark":"light"} mx-3 my-1`} onClick={()=>this.props.handleClick("entertainment")}>Entertainment</button>
                            <button type="button" className={`btn btn-${this.props.viewMode=="light"?"dark":"light"} mx-3 my-1`} onClick={()=>this.props.handleClick("general")}>General</button>
                            <button type="button" className={`btn btn-${this.props.viewMode=="light"?"dark":"light"} mx-3 my-1`} onClick={()=>this.props.handleClick("health")}>Health</button>
                            <button type="button" className={`btn btn-${this.props.viewMode=="light"?"dark":"light"} mx-3 my-1`} onClick={()=>this.props.handleClick("technology")}>Technology</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
