import { useEffect, useState } from 'react';
import { getAllTodos, createTodo } from '../../services/todo'

function Todo() {
  const [todoList, setTodoList]= useState([]);
  const [form, setForm]= useState([]);

  const handleChange = (evt) =>{
    evt.preventDefault();
    const {value,name} = evt.target
    setForm({
      [name]: value,
    });
  }
  console.log(form);
  const handleCreateTask = () => {
    const datatoSubmit ={
      ...form,
      status: false
    }
    console.log(datatoSubmit);
    const addData = async () =>{
      await createTodo();
    }
    addData(datatoSubmit);
  }

  useEffect(()=>{
    const showTodo= async() =>{
      try {
        const data = await getAllTodos()
        return setTodoList(data);
        } catch (error) {
          throw new Error (error)
        }

      }
      showTodo();
  },[])

  return(
      <div>
        <h2>Asignación</h2>
        <form onSubmit={handleCreateTask}>
          <input type="text" name='Description'onChange={handleChange} />
          <button type="submit">To do!</button>
        </form>
        <h2>Show To do</h2>
        {todoList.map( todo => <h3 key= {todo.id}>{todo.description}{todo.status ? 'hecho':'por hacer'}</h3>)}

      </div>

  )
}

export default Todo;
