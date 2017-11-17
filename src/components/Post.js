import React from 'react';
import axios from 'axios';

class Post extends React.Component {
    render () {
        return (
            <div>
                <h2>{this.props.test}</h2>
            </div>
        );
    }

    componentDidMount () {
        axios.post ('/log', {
            name: 'Post'
        })
            .then ((res) => {})
            .catch ((err) => {});
    }
}

/*const Post = () => {
    return (
        <div>
            <h2>Post Page</h2>
        </div>
    );
};*/

export default Post;