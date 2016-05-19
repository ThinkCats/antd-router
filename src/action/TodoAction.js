import alt from '../entry/alt';

class TodoAction {
  increase = (number)=>{
    console.log('action incre');
    return number;
  };

  decrease = (number) =>{
    console.log('store decre');
    this.dispatch(number);
  }
}

export default alt.createActions(TodoAction);
