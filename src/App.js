import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
  apiKey = process.env.NEWS_ENGINEER_API_KEY;
  constructor() {
    super();
    this.state = {
      viewMode: "light",
      switchTxt: "Enable Dark Mode",
      newsCategory: "science"
    }
  }
  toggleMode() {
    if (this.state.viewMode === "light") {
      this.setState({ viewMode: "dark", switchTxt: "Disable Dark Mode" });
      document.body.style.backgroundColor = "#28282B";
    }
    else {
      this.setState({ viewMode: "light", switchTxt: "Enable Dark Mode" });
      document.body.style.backgroundColor = "white";
    }
  }
  toggleChangeCategory = (newCat)=> {
    this.setState({newsCategory: newCat});
  }
  // in class based components we have to bind the function 
  render() {
    return (
      <Router>
      <div>
      <NavBar  viewMode={this.state.viewMode} switchTxt={this.state.switchTxt} toggleMode={this.toggleMode.bind(this)} changeCategory={this.toggleChangeCategory.bind(this)} />
        <div className="container">
        <Routes>
          <Route path="/About" element={<About defaultMode = {this.state.viewMode} />}/>
          <Route path="/" element = {<News key = {this.state.newsCategory} viewMode = {this.state.viewMode} pageSize = {6} category={this.state.newsCategory}/>}/>
        </Routes>
        </div>
      </div>
    </Router>
      
    )
  }
}
