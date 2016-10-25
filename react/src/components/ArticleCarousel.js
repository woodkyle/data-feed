import React from 'react';
import { Carousel } from 'react-bootstrap';

const ArticleCarousel = props => {
  let articles = props.articleArray.map(article => {
    if (article.urlToImage == null) {
      article.urlToImage = props.currentSourceLogoUrl;
    }
    return(
      <Carousel.Item>
        <img src={article.urlToImage} width={1910} height={1000} />
        <Carousel.Caption>
          <a href={article.url} target="_blank"><h3>{article.title}</h3></a>
          <p>{article.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  })

  return(
    <div>
      <br />
      <Carousel>
        {articles}
      </Carousel>
    </div>
  );
};

export default ArticleCarousel;
