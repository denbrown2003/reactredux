import React  from 'react'
import { Container } from 'reactstrap'
import { contextPanel } from '../../contexts/contextPanel'
import DarkTable from '../../components/common/tables/DarkTable'

const Panel = () => {

    const data = [
        {id: 12, name: 'some name', desciption: 'some description', time: 'sometime'}
    ]

    return(<Container>
        <contextPanel.Provider value={{
            title:'initial title'
        }}>
        

            <DarkTable 
                th={['#', 'title', "desciption", 'time']}
                array={[
                    {id: 12, name: 'some name', desciption: 'some description', time: 'sometime'}
                ]}
            />



        </contextPanel.Provider>
    </Container>)
}

export default Panel