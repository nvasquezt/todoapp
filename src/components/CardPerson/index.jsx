import React from 'react'

const CardPerson = (props) => {
  const {id, name, last, identification, age} = props.eachOne
  return (
    <div>
      <h1>ID Persona # {id+1}</h1>
      <span>Nombre: {name}</span><br />
      <span>Apellido: {last}</span><br />
      <span>cedula: {identification}</span><br />
      <span>edad: {age}</span><br />
    </div>

  )
}

export default CardPerson
