import React, { useState } from 'react';
import { Button, Form, Label, FormGroup, Input, Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import './StyleSheet.css';
//import PublicComp  from './PublicCompFunc';

function Login() {

  const [loginState, setLoginState] = useState({
    username: '',
    password: '',
    msg: '',
    loggedIn: false,
    visible: false
  })

  function onChange(e) {

    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value
    })
  }

  const onDismiss = () => {
    setLoginState({
      ...loginState,
      visible: false
    })
  }

  const loginSubmitHandler = () => {
    const { username, password } = loginState;

    if (username === 'admin' && password === '123') {
      localStorage.setItem('token', 'asdasdwqeqweas');
      setLoginState({
        ...loginState,
        loggedIn: true
      })
    } else {
      setLoginState({
        ...loginState,
        loggedIn: false,
        visible: true
      })
    }
    console.log('username', username)
    console.log('pass', password)
  }

  const textStyle = {
    textAlign: 'left'
  }

   if (loginState.loggedIn) {
    return <Redirect to='/home/' />
  } 

  return (
    <div>
      <Form className='loginForm boxShadowProp' style={{ padding: '50px', borderRadius: '25px', border: '1px solid darkgrey' }}>
        <h1 className='font-weight-bold'>Login!</h1>
        <hr />
        <FormGroup style={textStyle}>
          <Label className='text-bold'>UserName: </Label>
          <Input
            type='text'
            placeholder='UserName'
            name='username'
            onChange={e => onChange(e)}
          >
          </Input>
        </FormGroup>
        <FormGroup style={textStyle}>
          <Label className='text-bold'>Password: </Label>
          <Input
            type='password'
            placeholder='Password'
            name='password'
            onChange={e => onChange(e)}>
          </Input>
        </FormGroup>
        <Alert color="danger" isOpen={loginState.visible} toggle={onDismiss}>
          Please Check UserName or Password!
        </Alert>
        <Button
          color='info'
          className='btn-lg btn-block'
          onClick={loginSubmitHandler}>Login</Button>
      </Form>
    </div>
  )
}

export default Login; 