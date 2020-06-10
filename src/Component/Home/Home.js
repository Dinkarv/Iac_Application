import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import NewResource from '../Pages/New_Resource';
import NewBlueprint from '../Pages/New_Blueprint';

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
                <h5>Home Page Under Construction!</h5>
                <NewBlueprint/>
            </div>
        )
    }
}

export default Route;
