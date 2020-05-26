import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom';

class Route extends Component {
        

         constructor(props){
            super(props)
            const token = localStorage.getItem('token')
            console.log('constr',token)
            let loggedIn = true
            if(token == null){
                loggedIn = false
            }

            this.state = {
                loggedIn
            }
            
            
        } 
    
    render(){
        console.log('home token',this.token);
         if(this.state.loggedIn===false){
           return <Redirect to='/login/'/> 
        } 
        return (
            <div>
                <FontAwesomeIcon icon={faSpinner} spin/>
                <FontAwesomeIcon icon={faSignInAlt}/>
                In Home Comp!
            </div>
        )
    }
}

export default Route;
