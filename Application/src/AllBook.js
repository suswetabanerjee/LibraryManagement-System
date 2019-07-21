import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';


class AllBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            search : ""
        }
       
    }
    updateSearch(e){
        this.setState({search: e.target.value.substr(0, 20)});
    }
    
    render(){
        let filteredBooks = this.props.posts.filter(
            (posts) => {
                return posts.title.toLowerCase().includes(this.state.search.toLowerCase());
            }
        );
        return(
            <div>
                {Object.keys(filteredBooks).length !== 0 ?  <h1 className="post-heading">All books</h1> : <h1 className="post-heading">No Books available</h1>}  {/*To check if array is empty or not*/}
                
                
                {Object.keys(filteredBooks).length !== 0 ?
                <input className="search-box" type="text" placeholder="Search by Book name..." value={this.state.search} onChange={this.updateSearch.bind(this)}/> : ""}
                
                {/*Arrow function to map each added object*/}
                {filteredBooks.map((post) =>(
                     
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