import React from 'react';
import { useDispatch } from 'react-redux';
import { loadData } from '../../../store/sample2/actions';
import { Container, Button } from 'react-bootstrap';


export  const Sample2 = () =>{
    const dispatch = useDispatch();
    const onClick = () => dispatch(loadData());

    return(
        <Container>
            <Button onClick={onClick}>
                Click me
            </Button>
        </Container>
    )
}