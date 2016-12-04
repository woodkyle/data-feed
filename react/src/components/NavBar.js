import React from 'react';
import DropdownBar from './DropdownBar';
import { PageHeader, Button } from 'react-bootstrap';
import AuthService from './AuthService'
import Login from './Login'
import ProfileDetails from './ProfileDetails'


const NavBar = props => {

  let auth = new AuthService('srrle1X7NGF7iOnQo0mGhGzesmbxlV7v', 'kylewood.auth0.com');

  return (
    <div>
      <PageHeader>
        <Login auth={auth}/>
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
