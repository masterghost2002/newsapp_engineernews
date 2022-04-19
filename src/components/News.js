import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  /// constuctor of the class
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResult: 0,
    }
  }
  // updateNews function to update the news when ever there is change in state like: category, page, pageSize
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2abcf94b47694e6cbd969d34a4128221&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResults,
      loading: false,
    })
  }
  // make the component alive
  async componentDidMount() {
    this.updateNews();
  }
  // fetchMoreData function for inifinite scroll
  fetchMoreData = async () => {
    // update the state later just simply add +1 to page in url as we know state take some time to get updated
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2abcf94b47694e6cbd969d34a4128221&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResult: parsedData.totalResults,
      loading : false,
    })
  }
  render() {
    return (
      <>
        <div className='container my-3' style={{ color: this.props.viewMode === "light" ? "black" : "white" }}>
          <h1 className="text-center my-3">{(this.props.category).toUpperCase()} -TOP HEADLINES</h1>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length != this.state.totalResult}
            loader={<Spinner/>}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                  return <div className="col-md-4" key = {element.url}>
                    <NewsItem title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 44) : ""} imageUrl={element.urlToImage} newsUrl={element.url} viewMode={this.props.viewMode} date={element.publishedAt} author={element.author} source={element.source.name} />
                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }
}
export default News
