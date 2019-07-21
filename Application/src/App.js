import React, {Component} from 'react';
import PostBook from './PostBook';
import AllBook from './AllBook';
import {Link, Route, Switch } from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center">Tiny Book Library</h2>
          <span className="span_link"><Link to="/">Post A Book</Link></span>
          <span className="span_link"><Link to="/books">All Books</Link></span>
        </div>
        <Switch>
          <Route exact path="/" component={PostBook}/>
          <Route exact path="/books" render={props => <AllBook {...props} />} />
        </Switch>

      </div>
    );
  }
}

export default App;
