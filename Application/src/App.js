import React, {Component} from 'react';
import PostBook from './PostBook';
import AllBook from './AllBook';


class App extends Component{
  render(){
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center">Tiny Book Library</h2>
        </div>
        <PostBook/>
        <AllBook/>
      </div>
    );
  }
}

export default App;
