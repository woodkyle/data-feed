import React from 'react';
import { ButtonToolbar, ButtonGroup, DropdownButton, MenuItem, Popover, OverlayTrigger } from 'react-bootstrap';

const DropdownBar = props => {

  let dropMenus = props.categories.map( category => {
    let menuItems = props.sourceArray.map( s => {
      let popover = (
        <Popover id="popover-hover" title={s.name}>
          {s.description}
        </Popover>
      )
      if (s.category === category) {
        let handleClick = () => props.handleClick(s.apiKey)
        return (
          <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popover}>
            <MenuItem onClick={handleClick}>{s.name}</MenuItem>
          </OverlayTrigger>
        )
      }
    })
    return(
      <DropdownButton title={category} id="bg-justified-dropdown">
        {menuItems}
      </DropdownButton>
    )
  })
  return (
    <div>
      <ButtonToolbar>
        <ButtonGroup justified>
          {dropMenus}
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
};

export default DropdownBar;
