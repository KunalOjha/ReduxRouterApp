import React, {Component} from 'react';
import {fetchPosts} from '../actions';
import {connect} from 'react-redux';

class PostsIndex extends Component {
   
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>Posts Index</div>
        )
    }
}

//shortcut for writing matchStateToProps ;)
export default connect(null, {fetchPosts})(PostsIndex);
