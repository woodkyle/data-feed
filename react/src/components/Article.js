import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

class Article extends Component {

  constructor(props){
    super(props);
  }

  render(){
    let articles = this.props.articleArray.map(article => {
      return(
        <Carousel.Item>
          <Image src={article.urlToImage} responsive />
          <Carousel.Caption>
            <h3>{article.title}</h3>
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

export default Article;
