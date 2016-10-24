import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

const ArticleThumbnails = props => {

  let articles = props.articleArray.map(article => {
    return (
      <Thumbnail>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <p>Author: {article.author}</p>
        <p><a href={article.url} target="_blank">Source</a></p>
      </Thumbnail>
    )
  })

  return(
    <div>
      {articles}
    </div>
  );
};

export default ArticleThumbnails;
