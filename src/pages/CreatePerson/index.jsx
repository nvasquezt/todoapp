import React, { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { addPerson } from '../../services/user'

const CreatePerson = () => {
  const [form, setForm]=useState([]);

const HandleChange = (evt) =>{
  setForm({...form, [evt.target.name]: evt.target.value});
};

const onHandleSubmit = (e) =>{
  e.preventDefault();
  addPerson(form);
  setForm({});
}

  return (
    <div>
      <h1>CreatePerson</h1>
      <form onSubmit={onHandleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Ingresa el nombre"
          onChange={HandleChange}
          style= {{backgroundColor: '#D6D8FD'}}/>
        <Input
          type="text"
          name="last"
          placeholder="Ingresa el apellido"
          onChange={HandleChange}
          style= {{backgroundColor: '#D6D8FD'}}/>
        <Input
          type="number"
          name="identification"
          placeholder="Ingresa el numero de documento"
          onChange={HandleChange}
          style= {{backgroundColor: '#D6D8FD'}}/>
        <Input
          type="number"
          name="age"
          placeholder="Ingresa la edad"
          onChange={HandleChange}
          style= {{backgroundColor: '#D6D8FD'}}/>
        <Button type="submit" name="Crear Usuario" />
      </form>
    </div>
  )
}

export default CreatePerson
