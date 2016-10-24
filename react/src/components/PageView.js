import React, { Component } from 'react';
import ArticleCarousel from './ArticleCarousel';
import DropdownBar from './DropdownBar';
import ArticleThumbnails from './ArticleThumbnails';
import { PageHeader, Tab, Tabs } from 'react-bootstrap';

export default class PageView extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <PageHeader>
          <center>DATA FEED NEWS</center><br />
          <center><img src={this.props.currentSource.logoUrl}/></center>
        </PageHeader><br />
        <DropdownBar
          categories={this.props.categories}
          sourceArray={this.props.sourceArray}
          handleClick={this.props.handleClick}
        />
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" justified>
          <Tab eventKey={1} title="Carousel">
            <ArticleCarousel
              articleArray={this.props.articleArray}
            />
          </Tab>
          <Tab eventKey={2} title="List">
            <ArticleThumbnails
              articleArray={this.props.articleArray}
            />
          </Tab>
        </Tabs>
        Powered By: <a href="https://newsapi.org">News API</a>
      </div>
    )
  }

}
