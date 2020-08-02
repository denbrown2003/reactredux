import React from 'react'
import Sample  from './Sample'
import { connect } from 'react-redux'
import { BUTTON_CLICK, clickButton } from '../../../store/sample/actions'


class SampleContainer extends React.Component{

    render(){
        return(
        <Sample 
            title={this.props.title}
            clickButton={this.props.clickButton}
        />);
    }
}


const mapStateToProps = state => {
    return {
        title: state.sample.title,

    }
}
const mapDispatchToProps  = {
    clickButton,
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer)
