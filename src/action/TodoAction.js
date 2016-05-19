import alt from '../entry/alt';

class TodoAction {
  increase = (number)=>{
    console.log('action incre');
    return number;
  };

  decrease = (number) =>{
    console.log('store decre');
    return number;
  }
}

export default alt.createActions(TodoAction);
