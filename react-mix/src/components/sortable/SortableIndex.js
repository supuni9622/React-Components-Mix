import React, {useState} from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import ToDoList from './ToDoList';
import arrayMove from 'array-move';
import './sortIndex.css';

// For this i have used 2 npm packes called react-sortable-hoc and array-move
// array-move - Move an array item to a different position
// arrayMove(array, from, to)

// react-sortable-hoc - A set of higher-order components to turn any list into an animated, accessible and touch-friendly sortable list


const todosInit = [ 
    {id: 1, content: 'content 1', isDone: false},
    {id: 2, content: 'content 2', isDone: false},
    {id: 3, content: 'content 3', isDone: false},
    {id: 4, content: 'content 4', isDone: false},
    {id: 5, content: 'content 5', isDone: false}
  ];

const SortableList = SortableContainer(ToDoList);

const SortableIndex = () => {

    const [todos, setTodos] = useState(todosInit);

    const onSortEnd = (e) =>{
        var newTodos = arrayMove(todos, e.oldIndex, e.newIndex )
        setTodos(newTodos);
      };

    return (
        <div className="sortingList">
            <h1 className='mb-4 mt-3 py-3'> Sortable Components </h1>
            <SortableList 
                items={todos} 
                onSortEnd={onSortEnd}
                axis='xy'
            />
      </div>
    )
}

export default SortableIndex
