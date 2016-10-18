import React from 'react';

const Article = props => {

  let articleStyle = {
    padding: 10,
    margin: 20,
    backgroundColor: '#363636',
    color: "#CAC9C9",
    display: "inline-block",
    fontFamily: "monospace",
    fontSize: 16,
    textAlign: "center",
    width: 350,
    height: 450
  }

  return (
    <div style={articleStyle}>
      <a href={props.url}>{props.title}</a><br />
      Author: {props.author}<br />
      Description: {props.description}<br />
      <img src={props.urlToImage} width={300} height={200} /><br />
    </div>
  )

}

export default Article;
