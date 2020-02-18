import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const reducer = (state=0,action)=>{
  switch(action.type){
    case 'INCREMENT':
      return state+1
    case 'DECREMENT':
      return state-1
    case 'ADD':
      return state + action.payload;
    default:
      return state;
  }
}

const store = createStore(reducer)
const addOne = ()=>{
  store.dispatch({type: 'INCREMENT'})
}
const minusOne = ()=>{
  store.dispatch({type: 'DECREMENT'})
}

const add = (num)=>{
  store.dispatch({type: 'ADD',payload: num})
}

const render = ()=>{
  ReactDOM.render(<App add={add} addOne={addOne} minusOne={minusOne} count={store.getState()}/>, document.getElementById('root'));
}
render()
store.subscribe(render)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
