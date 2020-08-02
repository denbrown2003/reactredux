import React from 'react'
import { Container } from 'react-bootstrap'
import Auth from '../../components/forms/auth/Auth'

export default function Home(){
    document.title = "Main page";
    return(
        <Container>
            <h1>Main page</h1>
            <Auth />
        </Container>
    )
}

