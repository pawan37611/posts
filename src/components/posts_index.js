import React, {Component} from 'react'
import {GetPosts} from '../actions/index'
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom'
class PostIndex extends Component
{
    componentDidMount()
    {

        this
            .props
            .GetPosts();

    }
 
    renderpost()
    {
        console.log(this.props.posts)
        return _.map(this.props.posts, post => {
            return <li key={post.id}>
            <Link to={`/${post.id}`}>
            {post.title}
            </Link>
            </li>
        })
    }

    render()
    {

        return (
            <div>
                <Link to="/new">
                    GO TO NEW
                </Link>
                <ul>
                    {this.renderpost()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {posts: state.posts};

}

export default connect(mapStateToProps, {GetPosts})(PostIndex);