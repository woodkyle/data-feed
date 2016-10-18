import React from 'react';

const MenuButton = props => {
  return(
    <div onClick={props.handleClick}>{props.buttonTitle}</div>
  )

}

export default MenuButton;
