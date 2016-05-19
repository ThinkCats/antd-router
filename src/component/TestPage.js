import React from 'react';
import { Pagination ,Col ,Row } from 'antd';
import connectToStores from 'alt-utils/lib/connectToStores';
import TodoStore from '../store/TodoStore';
import TodoAction from '../action/TodoAction';


class PurePag extends React.Component{

  constructor(props){
    super(props);
    let store = TodoStore.getState();
    this.state ={
      store
    }
  }

  static getStores() {
    return [TodoStore];
  }

  static getPropsFromStores() {
    let state = TodoStore.getState();
    console.log('state in tran:',state);
    return {
      number : state.number
    };
  }

  handleClick = () =>{
    console.log('click :',this.props.number);
    let num = this.props.number;
    console.log('number from store',this.state.store);
    TodoAction.increase(num);
  };

  handleDecre =()=>{
    console.log('decre number:',this.props.number);
    TodoAction.decrease(this.props.number);
  };

  render(){
    return (
      <div>
        <div onClick={this.handleClick}>
          INCRE: {this.props.number}
        </div>
        <div onClick={this.handleDecre}>
          DECRE: {this.props.number}
        </div>
        <br/>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    )
  }

}

export const Pag  = connectToStores(PurePag);
