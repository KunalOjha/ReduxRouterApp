import React, {Component} from 'react';
import {fetchPosts} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';

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
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Create New Post
                    </Link>
                </div>
                <div>
                    <h3>Posts</h3>
                    <ul>
                        {this.renderPosts()}
                    </ul>
                </div>
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
