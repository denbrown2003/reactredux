import React from 'react'
import Auth from './Auth'
import { connect } from 'react-redux'
import { setEmail1, setEmail2 } from '../../../store/auth/actions'

class AuthContainer extends React.Component{

    render(){
        return <Auth 
            email1={this.props.email1} 
            email2={this.props.email2} 
            setEmail1={this.props.setEmail1} 
            setEmail2={this.props.setEmail2}/>;
                 
    }
}

const mapStateToProps = state => {
    return {
        email1: state.auth.email1,
        email2: state.auth.email2
    }
}
const mapDispatchToProps  = {
    setEmail1,
    setEmail2
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)