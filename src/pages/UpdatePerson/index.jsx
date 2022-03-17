import React, { useState, useEffect } from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'
import { showOnePerson, updateUser } from '../../services/user'
import CardPerson from '../../components/CardPerson'

const UpdatePerson = () => {
  const [person, setPerson] = useState([]);
  const [form,setForm]=useState({});
  const [id, setId]=useState();

  const handleChangeById = (evt) => {
    setId(evt.target.value);
  }

  const handleChange = (evt) =>{
    setForm({...form, [evt.target.name]: evt.target.value});
    };
  const onHandleSubmit = (e) =>{
    e.preventDefault();
    updateUser(id,form);
    alert('Usuario actualizado(Altert Temporal)');
  };
  useEffect (() =>{
    const showthatPerson = async() => {
      const data= await showOnePerson(id);
      setPerson(data);
    }
    showthatPerson();
  }, [id])
  return (
    <div>
      <h1>UpdatePerson</h1>
      <form onSubmit={onHandleSubmit}>
      <Input
          type="number"
          name="id"
          placeholder="ID por actualizar"
          onChange={handleChangeById}
          style= {{backgroundColor: '#D6D8FD'}}/>
        <Input
          type="text"
          name="name"
          placeholder="Modificar nombre"
          onChange={handleChange}
          style= {{backgroundColor: '#D6D8FD'}}/>
        <Input
          type="text"
          name="last"
          placeholder="Modificar apellido"
          onChange={handleChange}
          style= {{backgroundColor: '#D6D8FD'}}/>
        <Input
          type="number"
          name="identification"
          placeholder="Modificar documento"
          onChange={handleChange}
          style= {{backgroundColor: '#D6D8FD'}}/>
        <Input
          type="number"
          name="age"
          placeholder="Modificar edad"
          onChange={handleChange}
          style= {{backgroundColor: '#D6D8FD'}}/>
        <Button type="submit" name="Actualizar usuario" />
      </form>
      {
          <CardPerson eachOne={person}/>
      }
    </div>
  )
}

export default UpdatePerson;
