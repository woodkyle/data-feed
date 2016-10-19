import React from 'react';
import MenuButton from './MenuButton';

const MenuBar = props => {
  let sourcesArray = props.sourcesArray;
  let buttons = sourcesArray.map(button => {
    let handleClick = () => props.handleClick(button.apiKey);
    return(
      <MenuButton
        key={button.name}
        id={button.name}
        handleClick={handleClick}
        buttonTitle={button.name}
        logoUrl={button.logoUrl}
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
