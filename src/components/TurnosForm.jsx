import React, { useState } from 'react'
import { agregarTurno } from '../slices/turnosSlice';
import { useDispatch } from 'react-redux';

const TurnosForm = () => {
  
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const dispatch = useDispatch();

  const handleTurno = (e) => {
    e.preventDefault();
    
    const nuevoTurno = {
        id: Math.floor(Math.random() * 1000),
        nombre,
        dni,
        descripcion,
        status: "Pendiente"
    };

    dispatch(agregarTurno(nuevoTurno));
  };

  return (
    <form className='p-3' onSubmit={handleTurno}>
      <div className='form-group'>
        <label htmlFor="">Nombre</label>
        <input 
          type="text" 
          className='form-control'
          onChange={(e) => setNombre(e.target.value)} 
        />
      </div>

      <div className='form-group'>
        <label htmlFor="">DNI</label>
        <input 
          type="number"
          className='form-control'
          onChange={(e) => setDni(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label htmlFor="">Descripción</label>
        <input 
          type="text" 
          className='form-control'
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      <button type='submit' className='btn btn-outline-primary mt-3'>SACAR TURNO</button>
    </form>
  )
}

export default TurnosForm