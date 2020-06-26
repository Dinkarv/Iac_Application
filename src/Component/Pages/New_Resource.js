import React, { Component } from 'react';
import {
    Button, Form, Label, FormGroup, Input,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    InputGroupAddon, InputGroup, InputGroupText
} from 'reactstrap';
import {  Row, Col } from 'reactstrap';
//import PublicComp  from './PublicCompFunc';
import Topbar from '../UI/Topbar/Home_Topbar/Home_Topbar'

class CreateNewResource extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false,
            resource_name: '',
            url:'',
            logo: ''
        }

    }
    textStyle = {
        textAlign: 'left'
    }

    toggle(e) {
        console.log('in toggle fxn')
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })

        console.log('toggle', e.target.value)
    }

    onChange(e){
      //console.log('loginChange',e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    formSubmitHandler(){
        console.log('in formsubmit', this.state)
    }

    countryData = [
        { value: 'AWS', name: 'AWS' },
        { value: 'GCP', name: 'GCP' },
        { value: 'Azure', name: 'Azure' },
        { value: 'VMWare', name: 'VMWare' }
    ];
    //onDismiss = setVisible(false);

    render() {

        return (
            <div>
                <Topbar/>
                <Row>
                    <Col xs="6">
                    <Form className='loginForm'
                 style={{ padding: '50px', borderRadius: '25px', border: '1px solid darkgrey', marginTop: '20px' }}>
                    <h1 className='font-weight-bold'>Create new resource!</h1>
                    <hr />
                    <FormGroup style={this.textStyle}>
                        <Label className='text-bold'>Name: </Label>
                        <Input
                            type='text'
                            placeholder='Resource Name'
                            name='resource_name'
                            onChange={this.onChange.bind(this)}>
                        </Input>
                        <br />

                        <InputGroup>
                            <Input 
                            placeholder="URL"
                            type='text'
                            name='url' 
                            onChange={this.onChange.bind(this)}/>
                            <InputGroupAddon addonType="append">
                                <InputGroupText>.git</InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                        <br />

                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this)}>
                            <DropdownToggle caret>
                                Platform
                            </DropdownToggle>
                            <DropdownMenu>
                                {this.countryData.map((e, key) => {
                                    return <DropdownItem
                                        key={key}
                                        value={e.value}
                                        onChange={this.onChange.bind(this)}
                                        
                                    >{e.name}</DropdownItem>;
                                })}
                            </DropdownMenu>
                        </Dropdown>
                        <br />

                        <Label for="exampleFile">Upload Logo:</Label>
                        <Input 
                            type="file" 
                            name="logo" 
                            id="logo"
                            onChange={this.onChange.bind(this)}>
                        </Input>

                    </FormGroup>
                    <Button
                        color='primary'
                        className='btn-lg btn-block'
                        onClick={this.formSubmitHandler.bind(this)}>Create!</Button>
                </Form>

                    </Col>
                    <Col xs="6">
                        <h3>Available Resources List:</h3>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CreateNewResource;