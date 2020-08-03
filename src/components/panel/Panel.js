import React, { useContext, Provider } from 'react'
import { Container } from 'reactstrap'
import { contextPanel } from '../../contexts/contextPanel'


const Panel = () => {

    return(<Container>
        <contextPanel.Provider value={}>
        





        </contextPanel.Provider>
    </Container>)
}

export default Panel