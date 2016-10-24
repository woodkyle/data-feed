import React, { Component } from 'react';
import PageView from './PageView'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      articleArray: [],
      sourceArray: [],
      categories: [],
      currentSource: "",
      sourceKey: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'api/articles'
    })
    .done(data => {
      this.setState({ sourceArray: data })
    });
    $.ajax({
      method: 'GET',
      url: 'api/sources'
    })
    .done(data => {
      this.setState({ categories: data })
    });
  }

  handleClick(sourceTitle) {
    $.ajax({
      method: 'POST',
      url: 'api/articles',
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

  render() {
    return (
      <PageView
        articleArray = {this.state.articleArray}
        sourceArray = {this.state.sourceArray}
        currentSource = {this.state.currentSource}
        categories = {this.state.categories}
        sourceKey = {this.state.sourceKey}
        handleClick = {this.handleClick}
      />
    )
  }

}
