import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import Login_Register from './Component/Login/Login_Register'
import Home from './Component/Home/Home';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import Topbar from './Component/UI/Topbar/Topbar';
import { Container, Col, Row } from 'reactstrap';
import NewResource from './Component/Pages/New_Resource';
import NewBlueprint from './Component/Pages/New_Blueprint';
//import Footer from './Component/UI/Topbar/Footer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      mail: '',
      pass: ''
    };
  }

  changeHandle = (e) => {
    if (e.target.value) {
      this.setState({
        mail: e.target.value
      })
    }
    console.log('e', this.state);
  }

  render() {
    const divStyle = {
      height: '100%',
      position: 'absolute',
      width: '100%'
    }


    return (
      <div>
        <div style={divStyle}>
          
            <Row>
              <Col>
              <Router>
                <Route path='/' exact component={Login_Register} />
                <Route path='/home' component={Home} />
                <Route path='/newresource' component={NewResource} />
                <Route path='/blueprint' component={NewBlueprint} />
              </Router>
            </Col>
            </Row>
          
          <hr />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
