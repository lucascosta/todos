import React from 'react';
import AddTodo from '../modules/AddTodo';
import TodoList, { reducers as todoListReducers } from '../modules/TodoList';

export const reducers = {...todoListReducers}

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
  </div>
);

export default App;
