import React from 'react'
import { Container } from 'react-bootstrap'
import AuthContainer from '../../components/forms/auth/AuthContainer'
import SampleContainer from '../../components/loaders/samples/SampleContainer'

export default function Home(){
    document.title = "Main page";
    return(
        <Container>
            <h1>Main page</h1>
            <SampleContainer />
        </Container>
    )
}

