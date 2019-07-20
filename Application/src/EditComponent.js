import React, {Component} from 'react';
import {connect} from 'react-redux';

class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newNumber = this.getNumber.value;
        const newAuthor = this.getAuthor.value;
        const newDescription = this.getDescription.value;

        const data = {
            newTitle,
            newNumber,
            newAuthor,
            newDescription
        }
        this.props.dispatch({type: 'UPDATE', id: this.props.post.id, data: data})
    }
    render(){
        return(
            <div key={this.props.post.id} className="post">
                <h1 className="post-heading">Update Book</h1>
                <form className="form" onSubmit = {this.handleEdit}>
        
                    <input required type="text" ref={(input) => this.getTitle = input} placeholder="Update book name"></input><br/>
                    <input required type="number" ref={(input) => this.getNumber = input} placeholder="Update book number"></input><br/>
                    <input required type="text" ref={(input) => this.getAuthor = input} placeholder="Update author name"></input><br/>
                    <textarea required rows="5" ref={(input) => this.getDescription = input} cols="28" placeholder="Update Description" /><br/>
                    <button className="button-cursor">Update</button>
        
                </form>
            </div>
        );
    
    }
}
export default connect()(EditComponent);