import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import { createPost } from '../actions/';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
    
    renderTitleField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input}
                />
            </div>
        )
    }
    onSubmit(values){
        this.props.createPost(values, () => this.props.history.push('/'));
    }

    render() {
        //handleSubmit is one of the many props that automatically get passed to the component via redux-form helper function
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderTitleField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderTitleField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderTitleField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/' className="btn btn-default">Cancel</Link>
             </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title ="Enter a title"
    };

    if (!values.categories) {
        errors.title ="Enter some categories"
    };

    if (!values.content) {
        errors.title ="Enter some content"
    };

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);