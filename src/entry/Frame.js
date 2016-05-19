import React from 'react';
import { connect  } from 'react-redux';
import {Link} from 'react-router';
import App from '../component/App';

class Frame extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <nav>
          <Link to="/">home</Link>---
          <Link to="/test">test</Link>---
          <Link to="/notfound">not found</Link>
        </nav>
        {this.props.children || <App /> }
      </div>
    )
  }
}


export default Frame;
