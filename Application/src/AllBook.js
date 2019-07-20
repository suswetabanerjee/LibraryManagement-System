import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';

class AllBook extends Component {
    render(){
        return(
            <div>
                
                {Object.keys(this.props.posts).length !== 0 ?  <h1 className="post-heading">All books</h1> : ""}  {/*To check if array is empty or not*/}
                
                {/*Arrow function to map each added object*/}
                {this.props.posts.map((post) =>(
                     
                    <div key={post.id}>
                        
                        {post.editing ? <EditComponent post={post} key={post.id}/> :
                            <Post key={post.id} post={post}/>}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state
    }
}
export default connect(mapStateToProps)(AllBook);