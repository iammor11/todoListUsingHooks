import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


const AddTodo = ({addTodo}) =>  {
    console.log("addtodo")
    const [content, setContent] = useState('');
    const [todos, setTodos] = useState({
        isCompleted: null,
        id: null,
        text: null
    })

    

    const handleChange = (e) => {
    setContent(e.target.value);
    setTodos({
        isCompleted: false,
        id: uuidv4(),
        text: content
    })
    }
    const handleSubmit = (e) => {   
    e.preventDefault();
    console.log("onsubmit")
    addTodo(todos);
    setContent('');
}

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={content} onChange={handleChange} required />
            <input type="button" value="Submit" />
        </form>
    )
}

export default AddTodo;