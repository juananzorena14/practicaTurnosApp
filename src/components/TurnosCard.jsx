import React from 'react'
import { useSelector } from 'react-redux'

const TurnosCard = () => {

  //useSelector() ELEGIR UN SLICE Y TRAERLO
  const listaTurnos = useSelector((state) => state.turnos)
  
  console.log(listaTurnos);
  
  return (
    <>
      {listaTurnos && (
        <div>
          {listaTurnos.map((turno) => {
            return (
            <div className='card mb-3'>
              <div className='card-body'>
                <h5 className='card-title'>Turno para: {turno.nombre}</h5>
                <p className='card-text'>DNI: {turno.dni}</p>
                <p className='card-text'>Descripción: {turno.descripcion}</p>
                <p className='card-text'>Estado: {turno.status}</p>
              </div>
            </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default TurnosCard