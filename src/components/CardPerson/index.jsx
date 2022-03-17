import React from 'react'

const CardPerson = (props) => {
  const {id, name, last, identification, age} = props.eachOne
  return (
    <div>
      <h1>ID Persona # {id}</h1>
      <span>Nombre: {name}</span><br />
      <span>Apellido: {last}</span><br />
      <span>Documento: {identification}</span><br />
      <span>Edad: {age}</span><br />
    </div>

  )
}

export default CardPerson
