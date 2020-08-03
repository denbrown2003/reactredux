import React, { useContext, Provider } from 'react'
import { Container } from 'reactstrap'

const Panel = () => {

    const contextPanel = useContext();

    return(<Container>
        <contextPanel.Provider value={}>
        





        </contextPanel.Provider>
    </Container>)
}

export default Panel