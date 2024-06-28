import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actualizarStatus } from '../slices/turnosSlice';

const AdminScreen = () => {

  const dispatch = useDispatch();

  const listaTurnos = useSelector((state) => state.turnos);

  const handleStatus = (id, status) => {
    dispatch(actualizarStatus({id, status}))
  };

  return (
    <>
    <div className='mt-4'>
    <h2>Panel de Administración</h2>

    <table className='table'>
      <thead>
        <th>Nombre</th>
        <th>DNI</th>
        <th>Descripción</th>
        <th>Estado</th>
        <th>Acciones</th>
      </thead>

      <tbody>
        {listaTurnos.map((turno) => {
          return (
            <tr key={turno.id}>
              <td>{turno.nombre}</td>
              <td>{turno.dni}</td>
              <td>{turno.descripcion}</td>
              <td>{turno.status}</td>

              <td>
                <button 
                  className='btn btn-success'
                  onClick={() => handleStatus(turno.id, "Confirmado")}>
                    Confirmar
                </button>
                <button 
                  className='btn btn-danger ms-2'
                  onClick={() => handleStatus(turno.id, "Rechazado")}>
                    Rechazar
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
    </>
  )
}

export default AdminScreen