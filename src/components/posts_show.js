import React, {Component} from 'react';
import {fetchPost} from '../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class PostsShow extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }
    
    render(props){
        const { post } = this.props;
        if(!post) {
            return(<div>Loading...</div>)
        }
    
        return (
            <div>
                <Link to="/">Back to List</Link>
                <h3>
                    {post.title}
                </h3>
                <h6>
                    {post.categories}
                </h6>
                <p>{post.content}</p>
            </div>
        );
    };
}

// {posts} --> posts = this.state.props.posts, state automatically gets passes in as the first parameter
// ownProps --> ownProps = this.props, ownProps is the second parameter, 
function mapStateToProps({posts}, ownProps) {
    return {
        post: posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);