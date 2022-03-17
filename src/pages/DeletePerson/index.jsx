import React, { useState } from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'
import { deleteUser } from '../../services/user';

const DeletePerson = () => {
  const [id, setId]=useState();

  const handleChangeById = (evt) => {
    setId(evt.target.value);
  }

  const onHandleSubmit = (e) =>{
    e.preventDefault();
    deleteUser(id);
    alert('Usuario Eliminado(Altert Temporal)');
  }
  return (
    <div>
      <h1>DeletePerson</h1>
      <form onSubmit={onHandleSubmit}>
        <Input
          type="number"
          name="id"
          placeholder="ID de cuenta por borrar"
          onChange={handleChangeById}
          style= {{backgroundColor: '#D6D8FD'}}/>
        <Button type="submit" name="Borra usuario" />
      </form>
    </div>
    )
  }

export default DeletePerson;
