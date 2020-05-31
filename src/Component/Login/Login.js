import React, { Component } from 'react';
import { Button, Form, Label, FormGroup, Input, Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom';
//import PublicComp  from './PublicCompFunc';

class Login extends Component {

    constructor(props){
      super(props)
      let loggedIn = false
      let visible = false
      this.state = {
        username: '',
        password: '',
        msg: '',
        loggedIn,
        visible
      }
      this.onChange = this.onChange.bind(this)
      this.loginSubmitHandler = this.loginSubmitHandler.bind(this)
      this.onDismiss = this.onDismiss.bind(this)

      //const [visible, setVisible] = useState(true);
      
    }

    //onDismiss = setVisible(false);

    onChange(e){
      //console.log('loginChange',e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onDismiss(){
      this.setState({
        visible: false
      })
    }

    loginSubmitHandler(event){
      const {username, password} = this.state;
      if(username==='admin' && password==='123'){
        localStorage.setItem('token', 'asdasdwqeqweas');
        this.setState({
          loggedIn: true
        })
      }else{
        this.setState({
          visible: true,
          loggedIn: false
        })
      }
    }
    
    textStyle = {
    textAlign: 'left'
  }
  //console.log(props);
  render(){
    
    
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
        <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
          Please Check UserName or Password!
        </Alert>
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