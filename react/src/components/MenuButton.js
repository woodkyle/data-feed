import React from 'react';

const MenuButton = props => {
  return(
    <button onClick={props.handleClick}>{props.buttonTitle}</button>
  )

}

export default MenuButton;
