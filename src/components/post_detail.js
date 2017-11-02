import React , {Component} from 'react';
import {connect} from 'react-redux'
import {GetPost} from '../actions/index'
import {Link} from 'react-router-dom'

class PostDetails extends Component
{

    componentDidMount()
    {
        const {id}=this.props.match.params; 
        this.props.GetPost(id);
        
    }
    render()
    {
      const {post}=this.props;
    
     
if(!post){
return <div>loading....</div>
}

        return(
            <div>
            <Link to="/">back to home</Link>
                {post.title}    
            </div>

        );
    }
}

function  mapStateToProps  ({posts}, ownProps)  { 
    //console.log('sdsadsad'+posts);
    
return {
    
    post: posts[ownProps.match.params.id]
}

}

export default connect(mapStateToProps, {GetPost}) (PostDetails);