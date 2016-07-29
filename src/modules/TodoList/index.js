import React from 'react';
import { combineReducers } from 'redux';

import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';

const ADD_TODO   = 'TodoList/ADD_TODO';
const SET_VISIBILITY_FILTER = 'TodoList/SET_VISIBILITY_FILTER';
const TOGGLE_TODO = 'TodoList/TOGGLE_TODO';

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: (nextTodoId++).toString(),
    text,
  };
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action),
      ];
    case TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const reducers = {
  todos,
  visibilityFilter,
};


const TodoList = () => (
  <div>
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoList;
