import React, { Component } from 'react';
import ArticleCarousel from './ArticleCarousel';
import ArticleThumbnails from './ArticleThumbnails';
import NavBar from './NavBar';
import { Tab, Tabs, Grid } from 'react-bootstrap';
import Iframe from 'react-iframe';
import PinnedArticles from './PinnedArticles'

export default class PageView extends Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div>
        <NavBar
          categories={this.props.categories}
          sourceArray={this.props.sourceArray}
          handleClick={this.props.handleClick}
          currentSourceLogoUrl={this.props.currentSource.logoUrl}
        />
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" justified>
          <Tab eventKey={1} title="Carousel">
            <Grid>
              <ArticleCarousel
                articleArray={this.props.articleArray}
                currentSourceLogoUrl={this.props.currentSource.logoUrl}
              />
            </Grid>
          </Tab>
          <Tab eventKey={2} title="List">
            <Grid>
              <ArticleThumbnails
                articleArray={this.props.articleArray}
                currentSourceLogoUrl={this.props.currentSource.logoUrl}
                handlePin={this.props.handlePin}
              />
            </Grid>
          </Tab>
          <Tab eventKey={3} title="Trending Articles">
            <Grid>
              <PinnedArticles
                pinnedArticles={this.props.pinnedArticles}
                currentSourceLogoUrl={this.props.currentSource.logoUrl}
              />
            </Grid>
          </Tab>
        </Tabs><br />
        Powered By: <a href="https://newsapi.org" target="_blank">News API</a>
      </div>
    )
  }

}
