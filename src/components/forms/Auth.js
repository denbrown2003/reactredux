import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

class Auth extends React.Component{

    render(){
        return(
            <Row>
                <Col xs={6} md={4}>
                
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
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