import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

class DropdownBar extends Component {

  constructor(props){
    super(props);
  }

  render() {
    let dropMenus = this.props.categories.map( category => {
      let menuItems = this.props.sourceArray.map( s => {
        if (s.category === category) {
          let handleClick = () => this.props.handleClick(s.apiKey)
          return (
            <MenuItem onClick={handleClick}>{s.name}</MenuItem>
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
        <br />
      </div>
    )
  }
}

export default DropdownBar;
