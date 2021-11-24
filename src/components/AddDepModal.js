import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';


export class AddDepModal extends Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props);
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
                        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
                    </Modal.Header>
                </Modal>
            </div>

        )
    }
}
