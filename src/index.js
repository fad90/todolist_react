import React from 'react';
import reactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import "./index.css";

const App = () => {

  const todoData = [
    {label: "Drink All", important: false, id: 1},
    {label: "Have A Lunch", important: true, id: 2},
    {label: "Build React App", important: false, id: 3}
  ];


  return (
    <div className="container">
      <AppHeader/>
      <SearchPanel/>
      <ItemStatusFilter/>
      <TodoList todos={todoData}/>
    </div>
  )
}

reactDom.render(<App/>,document.getElementById('container'));