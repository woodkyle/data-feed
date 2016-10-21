import React, { Component } from 'react';
import ArticleCarousel from './ArticleCarousel';
import DropdownBar from './DropdownBar';
import ArticleThumbnails from './ArticleThumbnails';
import { PageHeader, Tab, Tabs } from 'react-bootstrap';
import Iframe from 'react-iframe';

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
        this.setState({ sourceKey: sourceTitle })
        this.setState({ articleArray: data });
      }.bind(this)
    })
  }

  render() {
    return (
      <div>
        <PageHeader>
          <center>DATA FEED NEWS</center><br />
          <center><img src={this.state.currentSource.logoUrl}/></center>
        </PageHeader><br />
        <DropdownBar
          categories={this.state.categories}
          sourceArray={this.state.sourceArray}
          handleClick={this.handleClick}
        />
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" justified>
          <Tab eventKey={1} title="Carousel">
            <ArticleCarousel
              articleArray={this.state.articleArray}
            />
          </Tab>
          <Tab eventKey={2} title="List">
            <ArticleThumbnails
              articleArray={this.state.articleArray}
            />
          </Tab>
          <Tab eventKey={3} title="Source Home Page">
            <Iframe url={this.state.currentSource.url}/>
          </Tab>
        </Tabs>
        <div dangerouslySetInnerHTML={this.createMarkup} />
        Powered By: <a href="https://newsapi.org">News API</a>
      </div>
    )
  }

}
