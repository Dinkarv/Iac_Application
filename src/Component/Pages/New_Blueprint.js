import React, { useState } from 'react';
import {
    Button, Form, Label, FormGroup, Input, ButtonGroup
} from 'reactstrap';
import Topbar from '../UI/Topbar/Home_Topbar/Home_Topbar'
import {  Row, Col } from 'reactstrap';
///asd

const CreateNewBluePrint = (props) => {

    const resourceTabs = [
        { value: '1', name: 'AWS' },
        { value: '2', name: 'GCP' },
        { value: '3', name: 'Azure' },
        { value: '4', name: 'VMWare' }
    ];

    const checkBoxDummyData = [
        { value: '1', name: 'Resource-1' },
        { value: '2', name: 'Resource-2' },
        { value: '3', name: 'Resource-3' }
    ]

    let textStyle = {
        textAlign: 'left'
    }

    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState([]);
    const [bluePrintname, setBluePrintName] = useState('');
    const [bluePrintJsonObject, setbluePrintObject] = useState([]);

    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
            cSelected.push(selected);
        } else {
            cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    }

    const onRadioBtnClick = (selected) => {
        const index = rSelected.indexOf(selected);
        if (index < 0) {
            rSelected.push(selected);
        } else {
            rSelected.splice(index, 1);
        }
        setRSelected([...rSelected]);
    }

    const submithandler = (e) => {
        e.preventDefault();
        console.log('inside submitHandler')
    }

    return (
        <div>
            <Topbar/>
            <Row>
            <Col xs="6">
                
            <Form className='loginForm'
                style={{ padding: '45px', borderRadius: '25px', border: '1px solid darkgrey', marginTop: '20px' }}>
                <h1 className='font-weight-bold'>Create new Blueprint!</h1>
                <hr />
                <FormGroup style={textStyle}>
                <Label className='text-bold'>Select Platform: </Label>
                    <ButtonGroup style={{ display: 'block' }}>
                        {resourceTabs.map((e, key) => {
                            return <Button
                                color='info'
                                key={key}
                                style={{ margin: '2%' }}
                                value={e.value}
                                onClick={() => onCheckboxBtnClick(e.name)}
                                active={cSelected.includes(e.value)}>{e.name}</Button>
                        })}
                    </ButtonGroup>
                    
                    <br />
                    <div style={{ display: 'grid' }}>
                    <Label className='text-bold' style={textStyle}>Select Resources: </Label>
                        {checkBoxDummyData.map((e, key) => {
                            return <Label check>
                                <Input
                                    type="checkbox"
                                    id={e.value}
                                    key={key}
                                    onClick={() => onRadioBtnClick(e.name)}
                                    active={rSelected.includes(e.value) ? true : false}>
                                </Input>
                                {e.name}
                            </Label>
                        })}
                    </div>
                    <br />
                    <Label className='text-bold'>Name: </Label>
                    <Input
                        type='text'
                        placeholder='BluePrint Name'
                        name='blueprint_name'
                        value={bluePrintname}
                        onChange={e => setBluePrintName(e.target.value)}
                    >
                    </Input>
                    </FormGroup>
                <Button
                    color='primary'
                    className='btn-lg btn-block'
                    onClick={submithandler}
                >Create!</Button>
            </Form>
            </Col>
            <Col xs="6">
               <h3> Available Blueprint lists:</h3>
            </Col>
            </Row>
        </div>
    )
}

export default CreateNewBluePrint;