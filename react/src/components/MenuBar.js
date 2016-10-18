import React from 'react';
import MenuButton from './MenuButton';

const MenuBar = props => {
  let buttonTitles = ["cnn", "bbc-news", "espn"];
  let buttons = buttonTitles.map(buttonTitle => {
    let handleClick = props.handleClick(buttonTitle);
    return(
      <MenuButton
        key={buttonTitle}
        id={buttonTitle}
        handle={handleClick}
        buttonTitle={buttonTitle}
      />
    )
  })
  return (
    <div>
      {buttons}
    </div>
  )

}

export default MenuBar;