import React from 'react'
import { Button } from 'react-bootstrap'

class Sample extends React.Component {
    constructor(props){
        super(props);

        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick(){
        this.props.onBtnClick('clicked');
    }

    render(){
        return(
            <Button
                onCkick={this.onBtnClick}
        >{this.props.title}</Button>
        )
    }
}


export default Sample