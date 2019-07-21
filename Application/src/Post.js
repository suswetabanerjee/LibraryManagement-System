import React, {Component} from 'react';
import {connect} from 'react-redux';

class Post extends Component {
    render(){
        return(
            <div className="post">
                <div>
                    <span> Book Name: </span>
                    <span className="book_details">{this.props.post.title}</span>
                </div>
                <div>
                    <span> Book Number: </span>
                    <span className="book_details">{this.props.post.number}</span>
                </div>
                <div>
                    <span> Book Author: </span>
                    <span className="book_details">{this.props.post.author}</span>
                </div>
                <div>
                    <span> Book Description: </span>
                    <span className="book_details">{this.props.post.description}</span>
                </div><br/>
                <div className="control-buttons">
                    <button className="edit" onClick={()=> this.props.dispatch({type:'EDIT_BOOK', id:this.props.post.id})}>Edit</button>
                    <button className="delete" onClick={()=>this.props.dispatch({type:'DELETE_BOOK',id:this.props.post.id})}>
                    Delete</button>
                </div>
                
            </div>
        )
    }
}
export default connect()(Post);