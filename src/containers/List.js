import React from 'react';
import BigText from '../components/BigText';
import {Route, Link} from 'react-router-dom';
import Alert from 'react-s-alert';
import axios from 'axios';
import {connect} from 'react-redux';

import Post from '../Components/Post';

import 'react-s-alert/dist/s-alert-default.css'

class List extends React.Component {
    render () {

       if (this.props.log=='false') {
           window.alert('Need login');
           window.location.href = "/";
       }

        return (
            < div >
                <Link to="/List/Lee">Lee</Link>
                <Link to="/List/Park">Park</Link>
                <Link to="/List/Hwang">Hwang</Link>
                <Link to="/List/Noh">Noh</Link>
                <Route path="/List/Lee" render={() => (<Post test="Lee"/>)} />
                <Route path="/List/Park" render={() => (<Post test="Park"/>)} />
                <Route path="/List/Hwang" render={() => (<Post test="Hwang"/>)} />
                <Route path="/List/Noh" render={() => (<Post test="Noh"/>)} />
            < /div>
        );
    }

    componentDidMount () {
        axios.post ('/log', {
            name: 'List'
        })
            .then ((res) => {
            //window.location.href = "/";
        })
            .catch ((err) => {});
    }

    /*render () {
        window.alert('Need Login');
        window.location.href = "/Chatting";
    }*/
}

const mapStateToProps = (state) => {
    return {
        log: state.login
    }
}

List = connect(mapStateToProps)(List);

export default List;