import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinnner from './Spinnner';
export class News extends Component {
  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=2abcf94b47694e6cbd969d34a4128221&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json(); 
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResult : parsedData.totalResults
    })
  }
  async componentDidMount() {
    this.updateNews();
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResult: 0
    }
  }
  handlePreviousClick = async () => {
    this.setState({page: this.state.page-1});
    this.updateNews();
  }
  handleNextClick = async () => {
    this.setState({page: this.state.page+1});
    this.updateNews();

  }
  render() {
    return (

      <div className='container my-3' style={{ color: this.props.viewMode === "light" ? "black" : "white" }}>
        <h1 className="text-center my-3">{(this.props.category).toUpperCase()} -TOP HEADLINES</h1>
        {this.state.loading && <Spinnner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 44) : ""} imageUrl={element.urlToImage} newsUrl={element.url} viewMode={this.props.viewMode} date = {element.publishedAt} author = {element.author} source = {element.source.name}/>
            </div>
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled = {(this.state.page+1)>Math.ceil(this.state.totalResult/this.props.pageSize)}type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
export default News
