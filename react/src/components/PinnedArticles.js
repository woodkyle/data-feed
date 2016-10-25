import React from 'react';
import { Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap';

const PinnedArticles = props => {

  let articles = props.pinnedArticles.map(article => {
    if (article.urlToImage == null){
      article.urlToImage = props.currentSourceLogoUrl;
    }
    if (article.author == null){
      article.author = "Not Available";
    }
    return (
      <Thumbnail>
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <p>Author: {article.author}</p>
              <Button bsStyle="primary" bsSize="small" href={article.url} target="_blank">Source Article</Button>
            </Col>
            <Col xs={6} md={4}>
              <img src={article.urlToImage} height={150} width={250} /><br />
            </Col>
          </Row>
        </Grid>
      </Thumbnail>
    )
  })

  return(
    <div>
      <br />
      {articles}
    </div>
  );
};

export default PinnedArticles;
