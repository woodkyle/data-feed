import React from 'react';

const MenuButton = props => {

  return(
    <img src={props.logoUrl} width={150} height={50} onClick={props.handleClick} />
  )

}

export default MenuButton;
