import React, { Component } from 'react'
import Login2 from "./Login2";
import Register from "./Register2";
import { Container, Button, Row, Col } from 'reactstrap';
import Slider from "../Slider/Slider";
import './StyleSheet.css'
import Topbar from '../UI/Topbar/Topbar';

export class Login_SignUp extends Component {

    constructor() {
        super();
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false,
            buttonSelected: ''
        }
    }

    clickHandler(e) {
        console.log('in button 1', e.target.id);
        this.setState({
            buttonSelected: e.target.id
        });
        e.preventDefault();
    }

    showRegisterBox() {
        this.setState({
            isRegisterOpen: true,
            isLoginOpen: false
        })
    }

    showLoginBox() {
        this.setState({
            isRegisterOpen: false,
            isLoginOpen: true
        })
    }

    render() {
        let active = true;
        return (
            <div>

                <Row>
                    <Col><Topbar /></Col>
                </Row>
                <Container fluid='lg'>
                    <Row>
                        <Col sm="6" style={{ marginTop: "80px" }}><Slider /></Col>
                        <Col xs="6">

                            <Row>
                                <br />
                            </Row>
                            <Row>
                                <Col sm="12" md={{ size: 6, offset: 3 }}>
                                    <Row >
                                        <Col xs="6" style={{ textAlign: "right" }}>
                                            <Button outline color="secondary"
                                                className='btnColor'
                                                size='lg'
                                                onClick={this.showLoginBox.bind(this)} id='login'
                                                active={this.state.isLoginOpen}>Login</Button>
                                        </Col>
                                        <Col xs="6" style={{ textAlign: "left" }}>
                                            <Button outline color="secondary" size='lg'
                                                onClick={this.showRegisterBox.bind(this)} id='signup'
                                                active={this.state.isRegisterOpen}>Register</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: "center", padding: '25px' }}>
                                    {this.state.isLoginOpen && <Login2 />}
                                    {this.state.isRegisterOpen && <Register />}
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Login_SignUp
