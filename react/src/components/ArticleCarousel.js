import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

export default class ArticleCarousel extends Component {

  constructor(props){
    super(props);
  }

  render(){
    let articles = this.props.articleArray.map(article => {
      return(
        <Carousel.Item>
          <Image src={article.urlToImage} responsive />
          <Carousel.Caption>
            <a href={article.url} target="_blank"><h3>{article.title}</h3></a>
            <p>{article.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
    return(
      <Carousel>
        {articles}
      </Carousel>
    )
  }

}
