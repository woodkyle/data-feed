import React, { Component } from 'react';
import PageView from './PageView'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      articleArray: [],
      sourceArray: [],
      pinnedArticles: [],
      categories: [],
      currentSource: "",
      sourceKey: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePin = this.handlePin.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'api/sources'
    })
    .done(data => {
      this.setState({
        sourceArray: data.sources,
        categories: data.categories,
        pinnedArticles: data.pinned.reverse()
      })
    })
    this.handleClick("cnn");
  }

  handleClick(sourceTitle) {
    $.ajax({
      method: 'POST',
      url: 'api/sources',
      data: {sourceTitle},
      success: function(data) {
        this.state.sourceArray.map( s => {
          if (s.apiKey == sourceTitle) {
            this.setState({ currentSource: s })
          }
        })
        this.setState({
          sourceKey: sourceTitle,
          articleArray: data
         })
      }.bind(this)
    })
  }

  handlePin(sourceArticle) {
    $.ajax({
      method: 'POST',
      url: 'api/articles',
      data: sourceArticle,
      success: function(data) {
        this.setState({ pinnedArticles: data.reverse() })
      }.bind(this)
    })
  }

  render() {
    return (
      <PageView
        articleArray = {this.state.articleArray}
        pinnedArticles = {this.state.pinnedArticles}
        sourceArray = {this.state.sourceArray}
        currentSource = {this.state.currentSource}
        categories = {this.state.categories}
        sourceKey = {this.state.sourceKey}
        handleClick = {this.handleClick}
        handlePin = {this.handlePin}
      />
    )
  }

}
