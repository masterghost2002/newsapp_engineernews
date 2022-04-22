import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, viewMode, author, date,source} = this.props;
        return (
            <div>
                <div className={`card text-${viewMode === "light" ? "black" : "white"} bg-${viewMode === "light" ? "light" : "black"} mb-4`}>
                    <img src={imageUrl ? imageUrl : "http://www.nftitalia.com/wp-content/uploads/2017/07/news-1-1600x429.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}<b>...</b></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-success">By {author ? author : "Unknown"} Last updated {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className={`btn btn-${viewMode === "light" ? "dark" : "light"}`}>Read More</a>
                        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsItem
