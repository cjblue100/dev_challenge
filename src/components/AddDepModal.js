import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';


export class AddDepModal extends Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'department',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DepartmentId:null,
                DepartmentName:event.target.DepartmentName.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }

    render()
    {
        return(

            <div className="container">

                <Modal
                {...this.props}
                size="lg"
                aria-labelledby ="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter"> Add Department</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form.Group controlId= "DepartmentName">
                                    <Form.Label>Department Name</Form.Label>
                                    <Form.Control type="text" name="DepartmentName" required placeholder="DeparmentName"></Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type ="submit">Add Department</Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}
