import React from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'

const UpdatePerson = () => {
  const handleChange = () =>{};
  return (
    <div>
      <h1>UpdatePerson</h1>
      <form>
        <Input
        type="number"
        name='id'
        placeholder='Ingrese el ID a actualizar'
        onChange={handleChange}
        style={{backgroundColor: '#C1FAAF'}}/>
        <select
        name="properties"
        style={{backgroundColor: '#C1FAAF'}}
        onChange={handleChange}>
          <option value="*">seleccione la opción a actualizar</option>
          <option value="name">Nombre</option>
          <option value="last">Apellido</option>
          <option value="identification">N° de documento</option>
          <option value="age">Edad</option>
        </select>
        <Button type="submit" name="Actualizar datos" />
      </form>
    </div>
  )
}

export default UpdatePerson;
