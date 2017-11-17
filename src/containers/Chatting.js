import React from 'react';
import BigText from '../components/BigText';

import {connect} from 'react-redux';

import Temp from '../components/Temp';

import * as actions from '../actions/Login';
import {bindActionCreators} from 'redux';

import axios from 'axios';

class Chatting extends React.Component {
    /*componentWillMount () {
        axios.post ('/test', {
            name: 'List'
        })
            .then ((res) => {
            if (res.data.num == 'seven') {
                window.alert('777');
                window.location.href = "/";
            }
        })
            .catch ((err) => {});
    }*/

    render () {

        if (this.props.log=='false') {
            //window.alert('Need login');
            //window.location.href = "/";
        }

        return (
            <div>
                <BigText>Chatting</BigText>
                <button type="button" onClick={this.props.click}>Login</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        log: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        click: bindActionCreators (actions.logout, dispatch)
    }
}

Chatting = connect(mapStateToProps, mapDispatchToProps)(Chatting);

/*const Chatting = () => {
    return (
        <div>
            <BigText>Chatting</BigText>
        </div>
    );
};*/

export default Chatting;