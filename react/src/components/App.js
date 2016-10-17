import React, { Component } from 'react';
import Article from './Article';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      articleArray: []
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: "api/articles"
    })
    .done(data => {
      this.setState({ articleArray: data });
    });
  }

  render() {
    let articles = this.state.articleArray.map(article => {
      return(
        <Article
          title={article.title}
          author={article.author}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
          publishedAt={article.publishedAt}
        />
      )
    })
    return (
      <div>
        <ul>
          {articles}
        </ul>
      </div>
    )
  }

}

export default App;
