import React, {Component} from 'react';
import {fetchPosts} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';

class PostsIndex extends Component {
   
    renderPosts() {
       return  _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}> {post.title} </li>
                 )
            });
        }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log('posts',this.props.posts);
        return (
            <div>
                <h3>Posts</h3>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts : state.posts
    }
}

//shortcut for writing matchStateToProps ;)
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
