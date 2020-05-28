import React, { useContext } from 'react';
import Context from './Context';

const AddTodo = ({todos, isCompletedChg, deleteTodo}) => {
const context = useContext(Context)

console.log("todolist")
    const list = todos.length ? (
                 todos.map(todo => {
                     return(
                     <div key={todo.id}>
                     <h3 style={{textDecoration: todo.isCompleted ? "line-through" : null, color: todo.isCompleted ? "grey" : null}} onClick={() => isCompletedChg(todo)}>{todo.text}</h3>
                     <button>Update</button>
                     <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                     </div>
                 )})) 
                 : (<p>You don't have any todolist yet</p>)

    return(
        <>
        <h3>{context.myhead}</h3>
        <h3>{context.heading}</h3>
        <h3>{context.myheading}</h3>
        {list}
        </>
    )
}
export default AddTodo;