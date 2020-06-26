import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import NewResource from '../Pages/New_Resource';
import NewBlueprint from '../Pages/New_Blueprint';
import HomeTopbar from '../UI/Topbar/Home_Topbar/Home_Topbar';
import { Container, Button, Row, Col } from 'reactstrap';

class Route extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')
        console.log('constr', token)
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }

        this.state = {
            loggedIn
        }


    }

    //<NewResource />

    render() {

        if (this.state.loggedIn === false) {
            return <Redirect to='/login/' />
        }
        return (
            <div>

                <HomeTopbar />
                <Row>
                    <Col xs="6">
                        <h1>Dashboard Under Construction</h1>
                    </Col>
                    <Col xs="6">.</Col>
                </Row>
                
            </div>
        )
    }
}

export default Route;
