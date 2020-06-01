import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Navbar, Row, Col } from 'reactstrap';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export class Topbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            isOpen: false,
            isLoginClicked: false
        };
    }

    clickHandler(e) {
        console.log('before', this.state.isLoginClicked);
        this.setState({
            isLoginClicked: !this.state.isLoginClicked
        })
        console.log('after', this.state.isLoginClicked);

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (

            <Navbar color="light" dark expand="lg">
                <Container >
                    <Row>
                        <Col md="6">.col-6</Col>
                        <Col md="6">2020 © Infosys</Col>
                    </Row>
                </Container>
            </Navbar>
        );
    }
}

export default Topbar
