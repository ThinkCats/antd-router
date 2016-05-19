import alt from '../entry/alt';
import TodoAction  from '../action/TodoAction';

class TodoStore {
  constructor(){
    this.bindListeners({
      handleIncrease: TodoAction.increase,
      handleDecrease: TodoAction.decrease
    });

    this.state ={
      number : 1
    }
  }

  handleIncrease=(number)=>{
    console.log('store incre');
    this.setState({number : this.state.number + 1});
  }

  handleDecrease= (number) =>{
    console.log('store decre');
    this.number = number - 1;
  }
}

export default alt.createStore(TodoStore , 'TodoStore');
