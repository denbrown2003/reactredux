import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

class Auth extends React.Component{
    constructor(props){
        super(props);
        this.onEmail1Change = this.onEmail1Change.bind(this);
        this.onEmail2Change = this.onEmail2Change.bind(this);
    }

    onEmail1Change(event){
        this.props.setEmail1(event.target.value);
    }
    onEmail2Change(event){
        this.props.setEmail2(event.target.value);
    }

    render(){
        return(
            <Row>
                <Col xs={6} md={4}>
                
                    <Form>
                        <Form.Group controlId="formBasicEmail1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email"
                                value={this.props.email1} 
                                onChange={this.onEmail1Change}
                                />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email"
                                value={this.props.email2}
                                onChange={this.onEmail2Change}  
                                />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="warning">Click</Button>
                    </Form>

                </Col>
            </Row>
        
        )
    }
}

export default Auth