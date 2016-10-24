import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const ArticleCarousel = props => {
  let articles = props.articleArray.map(article => {
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
  );
};

export default ArticleCarousel;
