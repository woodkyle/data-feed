import React, { Component } from 'react';
import ArticleCarousel from './ArticleCarousel';
import DropdownBar from './DropdownBar';
import ArticleThumbnails from './ArticleThumbnails';
import { PageHeader } from 'react-bootstrap';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      articleArray: [],
      sourceArray: [],
      categories: [],
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
        this.setState({ sourceKey: sourceTitle })
        this.setState({ articleArray: data });
      }.bind(this)
    })
  }

  render() {
    return (
      <div>
        <PageHeader><center>DATA FEED NEWS</center></PageHeader><br />
        <DropdownBar
          categories={this.state.categories}
          sourceArray={this.state.sourceArray}
          handleClick={this.handleClick}
        />
        <ArticleCarousel
          articleArray={this.state.articleArray}
        />
        <ArticleThumbnails
          articleArray={this.state.articleArray}
        /><br />
        Powered By: <a href="https://newsapi.org">News API</a>
      </div>
    )
  }

}
