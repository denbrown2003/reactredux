import React from 'react'
import { Form, Button } from 'react-bootstrap'

class Auth extends React.Component{

    render(){
        return(
        <Form>
            <input  type='text' placeholder='input1' />
            <input  type='text' placeholder='input2' />
            <Button>Click</Button>
        </Form>
        )
    }
}

export default Auth