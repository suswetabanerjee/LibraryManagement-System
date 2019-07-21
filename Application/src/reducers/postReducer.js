const postReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return state.concat([action.data]);
        case 'DELETE_BOOK':
            return state.filter((post) => post.id !== action.id);
        case 'EDIT_BOOK':
            return state.map((post)=>post.id === action.id ? {...post, editing:!post.editing} : post)
        case 'UPDATE':
            return state.map((post)=>{
                if(post.id === action.id){
                    return{
                        ...post,
                        title: action.data.newTitle,
                        number:action.data.newNumber,
                        author:action.data.newAuthor,
                        description:action.data.newDescription,
                        editing: !post.editing
                    }
                } 
                else return post;
            })
        default:
            return state;
    }
}
export default postReducer;