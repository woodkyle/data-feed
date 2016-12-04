import React from 'react';
import { Thumbnail, Grid, Row, Col, Button, Fade } from 'react-bootstrap';

const ArticleThumbnails = props => {

  if (props.articleArray != null) {

    let articles = props.articleArray.map(article => {
      if (article.urlToImage == null){
        article.urlToImage = props.currentSourceLogoUrl;
      }
      if (article.author == null){
        article.author = "Not Available";
      }
      let handlePin = () => props.handlePin(article)
      return (
        <Thumbnail>
            <Row>
              <Col xs={12} md={8}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p>Author: {article.author}</p>
                <Button bsStyle="primary" bsSize="small" href={article.url} target="_blank">Source Article</Button>
                <Button bsStyle="primary" bsSize="small" onClick={handlePin}>Like</Button>
              </Col>
              <Col xs={6} md={4}>
                <img src={article.urlToImage} height={150} width={250} /><br />
              </Col>
            </Row>
        </Thumbnail>
      )
    })

    return(
      <Fade in={true}>
        <div>
          <Grid>
              {articles}
          </Grid>
        </div>
      </Fade>
    )
  }else {
    return (
      <div>
        <center><h1>This source is currently unavailable.</h1></center>
      </div>
    )
  }
};

export default ArticleThumbnails;
