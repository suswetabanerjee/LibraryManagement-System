import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostBook extends Component{
    constructor(props){
        super(props);
    }
    handleSubmit = (e) =>{
        e.preventDefault();

        const title = this.getTitle.value;
        const number = this.getNumber.value;
        const author = this.getAuthor.value;
        const description = this.getDescription.value;

        const data = {
            id : new Date(),
            title,
            number,
            author,
            description,
            editing:false

        }
        //console.log(data , "data");
        this.props.dispatch({
            type: 'ADD_BOOK',
            data});
        this.getTitle.value = '';
        this.getNumber.value = '';
        this.getAuthor.value = '';
        this.getDescription.value = '';
    }
    render(){
        return(
            <div className="post-container">
                <h1 className="post-heading">Add Book</h1>
                <form className="form" onSubmit = {this.handleSubmit}>

                    <input required type="text" ref={(input) => this.getTitle = input} placeholder="Enter book name"></input><br/>
                    <input required type="number" ref={(input) => this.getNumber = input} placeholder="Enter book number"></input><br/>
                    <input required type="text" ref={(input) => this.getAuthor = input} placeholder="Enter book author"></input><br/>
                    <textarea required rows="5" ref={(input) => this.getDescription = input} cols="28" placeholder="Enter Description" /><br/>
                    <button className="button-cursor">Add</button>

                </form>
            </div>
        );
    }
}
export default connect() (PostBook);