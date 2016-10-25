import React from 'react';
import DropdownBar from './DropdownBar';
import { PageHeader } from 'react-bootstrap';


const NavBar = props => {

  return (
    <div>
      <PageHeader>
        <center>DATA FEED NEWS</center><br />
        <center><img src={props.currentSourceLogoUrl}/></center><br />
        <DropdownBar
          categories={props.categories}
          sourceArray={props.sourceArray}
          handleClick={props.handleClick}
        />
      </PageHeader><br />
    </div>
  );
};

export default NavBar;
