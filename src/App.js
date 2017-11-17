import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';

import Home from './containers/Home';
import List from './containers/List';
import Chatting from './containers/Chatting';
import Options from './containers/Options';

class App extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/List" component = {List}/>
                    <Route path="/Chatting" component = {Chatting}/>
                    <Route path="/Options" component = {Home}/>
                </div>
            </Router>
        );
    }
}

export default App;