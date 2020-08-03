import React  from 'react'
import { Container } from 'reactstrap'
import { contextPanel } from '../../contexts/contextPanel'


const Panel = () => {

    return(<Container>
        <contextPanel.Provider value={{
            title:'initial title'
        }}>
        





        </contextPanel.Provider>
    </Container>)
}

export default Panel