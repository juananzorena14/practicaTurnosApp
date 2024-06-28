import { createSlice } from "@reduxjs/toolkit";

//EL initialState PUEDE SER UNA FUNCIÓN
const cargarTurnos = () => {
    const turnosAlmacenados = localStorage.getItem("turnos");
    return turnosAlmacenados ? JSON.parse(turnosAlmacenados) : [];
};

//FUNCIÓN PARA GUARDAR TURNOS EN localStorage PARA EL REDUCER agregarTurno
const guardarTurnos = (turnos) => {
    localStorage.setItem("turnos", JSON.stringify(turnos))
};

//createSlice() CON TRES VALORES
const turnosSlice = createSlice({
  //PONEMOS NOMBRE AL SLICE
  name: "turnos",

  //VALOR INICIAL
  initialState: cargarTurnos(),

  //REDUCERS (tienen que tener nombre único)
  reducers:{
    agregarTurno: (state, action) => {
      state.push(action.payload);
      guardarTurnos(state);
    },
    actualizarStatus: (state, action) => {
      //TRAEMOS ID Y STATUS, LO BUSCAMOS EN LA BD Y LO GUARDAMOS COMO turnos
      const {id, status} = action.payload;
      const turnos = state.find((turno) => turno.id === id);
      //SI SE ENCONTRÓ turnos, LE CAMBIA EL STATUS Y LO GUARDA EN LA BD
      if(turnos) {
        turnos.status = status;
        guardarTurnos(state)
      }
    }
  }
});

//EXPORT DE ACTIONS
export const {agregarTurno, actualizarStatus} = turnosSlice.actions;

//EXPORT DEL authSlice PARA USARLO EN EL STORE
export default turnosSlice.reducer;