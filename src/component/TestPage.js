import React from 'react';
import { Pagination } from 'antd';
import connectToStores from 'alt-utils/lib/connectToStores';
import TodoStore from '../store/TodoStore';
import TodoAction from '../action/TodoAction';


class Pag extends React.Component{

  static getStores() {
    return [TodoStore];
  }

  static getPropsFromStores() {
    return TodoStore.getState();
  }


  handleClick = () =>{
    console.log('click :',this.props.number);
    let num = this.props.number;
    console.log('number from store',num);
    TodoAction.increase(num);
  };

  handleDecre =()=>{
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

export default connectToStores(Pag);
