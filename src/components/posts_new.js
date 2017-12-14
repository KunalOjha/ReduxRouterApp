import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'

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
    
    render() {
        return (
            <form>
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
             </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        values.title ="Enter a title"
    };

    if (!values.categories) {
        values.title ="Enter some categories"
    };

    if (!values.content) {
        values.title ="Enter some content"
    };

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);