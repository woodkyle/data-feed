import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

class DropdownBar extends Component {

  render() {
    return (
      <div>
        <ButtonToolbar>
          <ButtonGroup justified>
            <DropdownButton title="General" id="bg-justified-dropdown">
              <MenuItem eventKey="1">CNN</MenuItem>
              <MenuItem eventKey="2">ESPN</MenuItem>
              <MenuItem eventKey="3">BBC</MenuItem>
              <MenuItem eventKey="4">NYTimes</MenuItem>
            </DropdownButton>

            <DropdownButton title="Entertainment" id="bg-justified-dropdown">
              <MenuItem eventKey="1">CNN</MenuItem>
              <MenuItem eventKey="2">ESPN</MenuItem>
              <MenuItem eventKey="3">BBC</MenuItem>
              <MenuItem eventKey="4">NYTimes</MenuItem>
            </DropdownButton>

            <DropdownButton title="Technology" id="bg-justified-dropdown">
              <MenuItem eventKey="1">CNN</MenuItem>
              <MenuItem eventKey="2">ESPN</MenuItem>
              <MenuItem eventKey="3">BBC</MenuItem>
              <MenuItem eventKey="4">NYTimes</MenuItem>
            </DropdownButton>

            <DropdownButton title="Sports" id="bg-justified-dropdown">
              <MenuItem eventKey="1">CNN</MenuItem>
              <MenuItem eventKey="2">ESPN</MenuItem>
              <MenuItem eventKey="3">BBC</MenuItem>
              <MenuItem eventKey="4">NYTimes</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </ButtonToolbar>
        <br />
      </div>
    )
  }
}

export default DropdownBar;
