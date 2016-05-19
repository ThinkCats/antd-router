import React, {Component } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { DatePicker } from 'antd';
import './App.less';
import TodoStore from '../store/TodoStore';

class App  extends Component{

  static getStores(){
    return [TodoStore];
  }

  static getPropsFromStores(){
    return TodoStore.getState();
  }

  render(){
    return (
      <div>
        <div>
          hello , {this.props.number}
        </div>
        <DatePicker />
      </div>
    )
  }
}



export default  connectToStores(App);

