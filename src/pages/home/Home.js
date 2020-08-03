import React from 'react'
import { Container } from 'react-bootstrap'
import AuthContainer from '../../components/forms/auth/AuthContainer'
import SampleContainer from '../../components/loaders/samples/SampleContainer'
import { Sample2 }from '../../components/loaders/sample2/Sample2'
import Panel from '../../components/panel/Panel'

export default function Home(){
    document.title = "Main page";
    return(
        <Container>
            <h1>Main page</h1>
            <Panel />
        </Container>
    )
}

