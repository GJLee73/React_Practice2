import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';
import axios from 'axios';

const MenuItem = ({children, to}) => {
    return (
        <Link to={to} className="menu-item">{children}</Link>
    );
};

class Header extends React.Component {
    render () {
        return (
            <div>
                <div className = "logo">
                    Friends Manager
                </div>
                <div className = "menu">
                    <MenuItem to={'/List'}>List</MenuItem>
                    <MenuItem to={'/Chatting'}>Chatting</MenuItem>
                    <MenuItem to={'/Options'}>Options</MenuItem>
                </div>
            </div>
        );
    }

    componentDidMount () {
        axios.post ('/log', {
            name: 'Header'
        })
            .then ((res) => {})
            .catch ((err) => {});
    }

}

/*const Header = () => {
    return (
        <div>
            <div className = "logo">
                Friends Manager
            </div>
            <div className = "menu">
                <MenuItem to={'/List'}>List</MenuItem>
                <MenuItem to={'/Chatting'}>Chatting</MenuItem>
                <MenuItem to={'/Options'}>Options</MenuItem>
            </div>
        </div>
    );
};*/

export default Header;