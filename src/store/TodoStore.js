import alt from '../entry/alt';
import { notification } from 'antd';
import jsonp from 'jsonp';
import TodoAction  from '../action/TodoAction';

class TodoStore {
  constructor(){
    this.bindListeners({
      handleIncrease: TodoAction.increase,
      handleDecrease: TodoAction.decrease
    });

    this.state ={
      number : 1,
      user: []
    }

    this.obj = {};
  }

  handleIncrease=(number)=>{
    console.log('store incre');
    this.setState({number : this.state.number + 1});
    console.log('init user info store :',number);
    // jsonp(SERVER_URI + '/api/server/v1/userapi/info.jsonp?orderId=10',(err,result) =>{
    //   console.log('result :',result.data.name);
    //   this.state.user = [] ;
    //   let arr = [] ;
    //   arr.push(result.data);
    //   this.setState({user: arr});
    //   this.obj = result.data;
    // })
  }

  handleDecrease= (number) =>{
    console.log('store decre');
    this.number = number - 1;
    this.setState({number : number -1});
  }
}

export default alt.createStore(TodoStore , 'TodoStore');
