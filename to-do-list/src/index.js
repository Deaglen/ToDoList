import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import {createStore} from "redux";

const defaultState = {
  todos:[],
}


const reducer = (state = defaultState, action) =>
{
  switch(action.type) {
    case "ADD_TASK":
        console.log("add_task----" + action.todos );
        return {...state, todos:[...state.todos, action.todos ]}
    case "DELETE_TASK":
      console.log("delete_task"+ action.todos );
      return {...state, todos:[...state.todos.filter((todo) => todo !== action.todos)]}

    default:
      return state
  }
}

const store = createStore(reducer)




ReactDOM.render(
   <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
