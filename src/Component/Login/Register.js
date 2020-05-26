import React, { Component } from 'react'
import { Button, Form, Label, FormGroup, Input } from 'reactstrap';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            errors: []
        }
    }

    textStyle = {
        textAlign: 'left'
    }

    showValidationError (elm, msg) {
        console.log('in show valuda: ', elm, msg)
/*         this.setState({
            errors: [{elm, msg}]
        }); */
        this.setState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] }));
    }

    clearValidationError (elm) {
        this.setState((prevState) => {
            let newArr = [];
            for (var err of prevState.errors) {
                if (elm !== err.elm) {
                    newArr.push(err);
                }
            }
        })
    }

    onUserNameChange = (e) => {
        console.log(e.target.value)
        this.setState({
            username: e.target.value
        });
    }

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    submitRegister() {
        if(this.state.username===''){
             this.showValidationError('username', 'Username cannot be empty')
        } if(this.state.email===''){
             this.showValidationError('email', 'email cannot be empty')
        }  if(this.state.password===''){
         this.showValidationError('password', 'Password cannot be empty')
        }
    }

    render() {
        let usernameErr = null, passwordErr = null, emailErr = null;
    
        for(let err in this.state.errors){
            
            if(this.state.errors[err].elm === 'username'){
                usernameErr = this.state.errors[err].msg
            }
            if(this.state.errors[err].elm === 'password'){
                passwordErr = this.state.errors[err].msg
            }
            if(this.state.errors[err].elm === 'email'){
                emailErr = this.state.errors[err].msg
            }
        }

        return (
            <div>
                <Form className='loginForm' style={{padding: '25px', borderRadius: '25px', border: '1px solid darkgrey'}}>
                    <h1 className='font-weight-bold'>Register!</h1>
                    <hr />
                    <FormGroup style={this.textStyle}>
                        <Label>UserName: </Label>
                        <Input type='text'
                            placeholder='UserName'
                            onChange={this.onUserNameChange.bind(this)}
                            name={this.props.stateOfComp}></Input>
                    </FormGroup>
        <small style={{color:'red', textAlign: 'left'}}>{usernameErr? usernameErr: ''}</small>
                    <FormGroup style={this.textStyle}>
                        <Label className='text-bold'>Email: </Label>
                        <Input type='text'
                            placeholder='Email'
                            onChange={this.onEmailChange.bind(this)}
                            name={this.props.stateOfComp}>
                        </Input>
                    </FormGroup>
                    <small style={{color:'red', textAlign: 'left'}}>{emailErr? emailErr: ''}</small>
                    <FormGroup style={this.textStyle}>
                        <Label className='text-bold'>Password: </Label>
                        <Input type='password'
                            placeholder='Password'
                            onChange={this.onPasswordChange.bind(this)}>
                        </Input>
                    </FormGroup>
                    <div><small style={{color:'red', textAlign: 'left'}}>{passwordErr? passwordErr: ''}</small></div>  
                    <Button 
                    color='info' 
                    className='btn-lg btn-block'
                    onClick={this.submitRegister.bind(this)}>Register</Button>
                </Form>
            </div>
        )
    }
}
