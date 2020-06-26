import React, { useState } from 'react'
import { Button, Form, Label, FormGroup, Input } from 'reactstrap';
import './StyleSheet.css'

function Register() {

    const [registerState, setRegisterState] = useState({
        username: '',
        password: '',
        email: '',
        errors: []
    })

    const textStyle = {
        textAlign: 'left'
    }

    const showValidationError = (elm, msg)=> {
        setRegisterState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] }));
    }

    const clearValidationError=(elm)=> {
        setRegisterState((prevState) => {
            let newArr = [];
            for (var err of prevState.errors) {
                if (elm !== err.elm) {
                    newArr.push(err);
                }
            }
        })
    }

    const onUserNameChange = (e) => {
        console.log(e.target.value)
        setRegisterState({
            ...registerState,
            username: e.target.value
        });
    }

    const onEmailChange = (e) => {
        setRegisterState({
            ...registerState,
            email: e.target.value
        });
    }

    const onPasswordChange = (e) => {
        setRegisterState({
            ...registerState,
            password: e.target.value
        });
    }

    const submitRegister=()=> {
        const {username, password, email} = registerState;

        if(registerState.username===''){
             showValidationError('username', 'Username cannot be empty')
        } if(registerState.email===''){
             showValidationError('email', 'email cannot be empty')
        }  if(registerState.password===''){
         showValidationError('password', 'Password cannot be empty')
        }

        const Obj = {
            objUser: username,
            objPass: password,
            objEmail: email
        }
        
    }

    let usernameErr = null, passwordErr = null, emailErr = null;
    
        for(let err in registerState.errors){
            
            if(registerState.errors[err].elm === 'username'){
                usernameErr = registerState.errors[err].msg
            }
            if(registerState.errors[err].elm === 'password'){
                passwordErr = registerState.errors[err].msg
            }
            if(registerState.errors[err].elm === 'email'){
                emailErr = registerState.errors[err].msg
            }
        }

        return (
            <div>
                <Form className='loginForm boxShadowProp' 
                style={{padding: '25px', borderRadius: '25px', border: '1px solid darkgrey'}}>
                    <h1 className='font-weight-bold'>Register!</h1>
                    <hr />
                    <FormGroup style={textStyle}>
                        <Label>UserName: </Label>
                        <Input type='text'
                            placeholder='UserName'
                            onChange={e=>onUserNameChange(e)}
                            name='username'></Input>
                    </FormGroup>
        <small style={{color:'red', textAlign: 'left'}}>{usernameErr? usernameErr: ''}</small>
                    <FormGroup style={textStyle}>
                        <Label className='text-bold'>Email: </Label>
                        <Input type='text'
                            placeholder='Email'
                            onChange={e=>onEmailChange(e)}
                            name='email'
                            >
                        </Input>
                    </FormGroup>
                    <small style={{color:'red', textAlign: 'left'}}>{emailErr? emailErr: ''}</small>
                    <FormGroup style={textStyle}>
                        <Label className='text-bold'>Password: </Label>
                        <Input type='password'
                            placeholder='Password'
                            name='password'
                            onChange={e=>onPasswordChange(e)}>
                        </Input>
                    </FormGroup>
                    <div><small 
                    style={{color:'red', textAlign: 'left'}}>{passwordErr? passwordErr: ''}</small>
                    </div>  
                    <Button 
                    color='info' 
                    className='btn-lg btn-block'
                    onClick={e=>submitRegister(e)}>Register</Button>
                </Form>
            </div>
        )
    }

export default Register;
