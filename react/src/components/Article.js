import React from 'react';

const Article = props => {

  return (
    <div>
      <li>
        <h3><a href={props.url}>{props.title}</a></h3>
        Author: {props.author}<br />
        Description: {props.description}<br />
        <img src={props.urlToImage} width={500} height={300}/><br />
      </li>
    </div>
  )

}

export default Article;
