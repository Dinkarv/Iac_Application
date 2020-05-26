import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
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

      clickHandler(e){
        console.log('before',this.state.isLoginClicked);
        this.setState({
            isLoginClicked: !this.state.isLoginClicked
        })
        console.log('after',this.state.isLoginClicked);
        
      }
    
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
      render() {
        return (
            
          <Navbar color="dark" dark expand="lg">
            <Container>
              <NavbarBrand href="/">
                <span> <h4>Infosys IaC Application</h4></span>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                  {this.state.isLoginClicked ?
                  <NavbarBrand onClick={this.clickHandler}>Logout <FontAwesomeIcon icon={faSignInAlt}/></NavbarBrand>:
                    <div>
                        <NavbarBrand onClick={this.clickHandler} href="/login">Login <FontAwesomeIcon icon={faSignInAlt}/></NavbarBrand>
                    </div>
                    }
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        );
      }
}

export default Topbar
