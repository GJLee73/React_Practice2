import React from 'react';
import BigText from '../components/BigText';
import {connect} from 'react-redux';

import * as actions from '../actions/Login';

import Temp from '../components/Temp';

import store from '../index';

import {bindActionCreators} from 'redux';

class Home extends React.Component {
    render () {
        return (
            <div>
                <BigText>Login Page</BigText>
                <Temp text={this.props.result} />
                <button type="button" onClick={this.props.click}>Login</button>
                <button type="button" onClick={this.props.click2}>Logout</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        click: bindActionCreators (actions.login, dispatch),
        click2: bindActionCreators (actions.logout, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);


/*const Home = () => {
    return (
        <div>
            <BigText>Login Page</BigText>
        </div>
    );
};*/