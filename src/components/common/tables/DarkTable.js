import React from 'react'
import { Table } from 'react-bootstrap'


const DarkTable = (props) => {
    const headers = props.th;
    const data = props.array;
    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    {headers.map((item, index) => {
                        return(
                        <th key={index}>{item}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>             
                {data.map((item, idx)=> {
                    return (<tr key={idx}>
                        {Object.keys(item).map((key, idx)=> {
                           return <td key={idx}>{item[key]}</td>;
                        })}
                    </tr>)
                })}
            </tbody>
        </Table>
    )
}


export default DarkTable