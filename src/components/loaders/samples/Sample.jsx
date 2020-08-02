import React from 'react'
import { Button } from 'react-bootstrap'

class Sample extends React.Component {
    constructor(props){
        super(props);

        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick(){

    }

    render(){
        return(
            <Button
                onCkick={this.onBtnClick}
            >Click Me</Button>
        )
    }
}


export default Sample