import React, {Component} from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      auth: this.props.auth
    }
  }

  componentDidMount(){
    this.setState({ auth: this.props.auth })
  }

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.state.auth.login.bind(this)}>Login</Button>
        </ButtonToolbar>
      </div>
    )
  }

}


export default Login;
