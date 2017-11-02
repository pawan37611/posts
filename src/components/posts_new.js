import React , {Component} from 'react';  
import {SavePost} from '../actions/index';
import {Field , reduxForm} from 'redux-form';      
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';




class NewPost extends Component{

renderField(field)
{

const {meta :{touched,error} }= field;
    const classname=`form-group ${touched && error ? 'has-danger' : ''}`
    return(
        <div className={classname}>
            <span>{field.label}</span>
            <input
            type="text"
            {...field.input}
            />
            <div className="text-help">

            {field.meta.touched ? field.meta.error: ''}
            </div>
            
        </div>
    )
}

onsubmit(values)
{
    this.props.SavePost(values
    ,()=>{this.props.history.push('/')}
    );


}

    render(){ 

const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onsubmit.bind(this))}>
                <Field
                label="name"
                name="title"
component={this.renderField}
                />

                <Field
                label="categories"
                name="categories"
component={this.renderField}
                />

                <Field
                label="content"
                name="content"
component={this.renderField}
                />
<button type="submit">submit</button>
<Link to="/">cancel</Link>
            </form>
        )
    }

}

function validate(values)
{
    const error={};

    if(!values.title)
    error.title="please enter titile value";

    return error;
}

export default reduxForm (
    {
        validate,
        form:'NewPostForm'
    }
) (
    connect (null,{SavePost})
(NewPost))