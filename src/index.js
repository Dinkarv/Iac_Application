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
import Footer from './Component/UI/Topbar/Footer'

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
    return (
      <div>
        <Topbar />
        <section>
          <Router>
            <Route path='/login' exact component={Login_Register} />
            <Route path='/home' component={Home} />
          </Router>
        </section>
        <hr/>
        <Footer/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
