import React from 'react'
import TurnosForm from '../components/TurnosForm'
import TurnosCard from '../components/TurnosCard'

const HomeScreen = () => {
  return (
    <>
      <h1>Sistema de Gestión de Turnos</h1>
      <TurnosForm/>
      <TurnosCard/>
    </>
  )
}

export default HomeScreen