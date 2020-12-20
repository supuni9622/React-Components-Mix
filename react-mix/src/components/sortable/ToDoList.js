import {SortableElement} from 'react-sortable-hoc';
import ToDoItem from './ToDoItem';

const SortableItem = SortableElement(ToDoItem) 

const ToDoList = ({items}) =>{

    return (
        <div className="todoList">
            {items.map((todo,i)=>{
                return <SortableItem 
                    todo={todo}
                    index={i}
                    key={todo.id}
                />
            })}
        </div>
    )

};

export default ToDoList;