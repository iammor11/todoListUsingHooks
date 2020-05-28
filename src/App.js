import React, {useState, useCallback, useMemo} from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Heading from './components/Heading';
import Context from './components/Context';
import Button from './components/Button';


const App = () => {
  const [todos, setTodos] = useState([]);

  const [heading, setHeading] = useState("My Todo Apsgsgsp")
  const [myhead, setMyhead] = useState("My Tskjfksodo App")

  const [myheading, setMyheading] = useState("My Todo App")

  const [age, setAge] = useState(20)
  const [salary, setSalary] = useState(50000)



  const memoisedHeading = useMemo(() => { 
  return <Heading /> }, [])

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])
  const addTodo = (todo) => {
    console.log("addtodo")
    let UpdatedTodos = [...todos, todo]
    setTodos(UpdatedTodos); 
  }

  const deleteTodo = (id) => {
    console.log("delete");
    const UpdatedTodos = todos.filter(todo => {
      return(
        todo.id !== id
      )})
      setTodos(UpdatedTodos);
  }
  
  const isCompletedChg =  (todo) => {
    todo.isCompleted = !todos.isCompleted
    console.log("iscompletedchg")
    let UpdatedTodos = [...todos]
    setTodos(UpdatedTodos)
  }
  console.log("app");
  return (
    <div>
      
      <Context.Provider value={{myheading: myheading, myhead: myhead, heading: heading }}>
      {memoisedHeading}
      <Button handleClick={incrementAge}>Add age</Button>
  <h2>{age}</h2>
  <Button handleClick={incrementSalary}>Add salary</Button>
  <h2>{salary}</h2>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} isCompletedChg={isCompletedChg} deleteTodo={deleteTodo}/>
    </Context.Provider> </div>
  );
}

export default App;
