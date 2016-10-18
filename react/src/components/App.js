import React, { Component } from 'react';
import Article from './Article';
import MenuBar from './MenuBar';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      articleArray: [],
      sourceArray: [],
      sourceKey: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'api/articles'
    })
    .done(data => {
      this.setState({ sourceArray: data })
    });
  }

  handleClick(sourceTitle) {
    $.ajax({
      method: 'POST',
      url: 'api/articles',
      data: {sourceTitle},
      success: function(data) {
        this.setState({ sourceKey: sourceTitle })
        this.setState({ articleArray: data });
      }.bind(this)
    })
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
        <MenuBar
          sourcesArray = {this.state.sourceArray}
          handleClick = {this.handleClick}
        />
        {articles}
      </div>
    )
  }

}

export default App;
