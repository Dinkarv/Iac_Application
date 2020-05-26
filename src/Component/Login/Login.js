import React, { Component } from 'react';
import { Button, Form, Label, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
//import PublicComp  from './PublicCompFunc';

class Login extends Component {

    constructor(props){
      super(props)
      let loggedIn = false
      this.state = {
        username: '',
        password: '',
        loggedIn
      }
      this.onChange = this.onChange.bind(this)
      this.loginSubmitHandler = this.loginSubmitHandler.bind(this)
    }

    onChange(e){
      //console.log('loginChange',e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    loginSubmitHandler(event){
      const {username, password} = this.state;
      
      if(username==='admin' && password==='123'){
        localStorage.setItem('token', 'asdasdwqeqweas');
        this.setState({
          loggedIn: true
        })
      }
    }
    
    textStyle = {
    textAlign: 'left'
  }
  //console.log(props);
  render(){
    console.log('render', this.state.loggedIn)
    if(this.state.loggedIn){
      return <Redirect to='/home/'/>
    }

  return (
    <div>
      <Form className='loginForm'  style={{padding: '50px', borderRadius: '25px', border: '1px solid darkgrey'}}>
        <h1 className='font-weight-bold'>Login!</h1>
        <hr/>
        <FormGroup style={this.textStyle}>
          <Label className='text-bold'>UserName: </Label>
          <Input 
          type='text'
          placeholder='UserName' 
          name='username'
          onChange={this.onChange}
          >
          </Input>
        </FormGroup>
        <FormGroup style={this.textStyle}>
          <Label className='text-bold'>Password: </Label>
          <Input 
          type='password' 
          placeholder='Password'
          name='password'
          onChange={this.onChange}>
          </Input>
        </FormGroup>
        <Button 
        color='info' 
        className='btn-lg btn-block' 
        onClick={this.loginSubmitHandler}>Login</Button>
      </Form>
    </div>
  )
}
}

export default Login; 