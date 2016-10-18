import React, { Component } from 'react';
import Article from './Article';
import MenuBar from './MenuBar';
import MenuButton from './MenuButton';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      articleArray: [],
      sourceKey: "cnn"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // $.ajax({
    //   method: 'GET',
    //   url: "api/articles"
    // })
    // .done(data => {
    //   this.setState({ articleArray: data });
    // });
  }

  handleClick(sourceTitle) {
    $.ajax({
      method: 'POST',
      url: "api/articles",
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
    let buttonTitles = ["cnn", "bbc-news", "espn"];
    let buttons = buttonTitles.map(buttonTitle => {
      let handleClick = () => this.handleClick(buttonTitle);
      return(
        <MenuButton
          key={buttonTitle}
          id={buttonTitle}
          handleClick={handleClick}
          buttonTitle={buttonTitle}
        />
      )
    })
    return (
      <div>
        {buttons}
        {articles}
      </div>
    )
  }

}

export default App;
