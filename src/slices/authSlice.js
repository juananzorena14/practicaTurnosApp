import { createSlice } from "@reduxjs/toolkit";

//DEFINIMOS PRIMERO EL initialState
const initialState = {
  user: null
};

//createSlice() CON TRES VALORES
const authSlice = createSlice({
  //PONEMOS NOMBRE AL SLICE
  name: "auth",

  //VALOR INICIAL
  initialState,

  //REDUCERS (tienen que tener nombre único)
  reducers:{
    login:(state, action) => {
      state.user = action.payload
    },

    logout: () => {
      console.log("hola")
    }
  }
});

//EXPORT DE ACTIONS
export const {login} = authSlice.actions;

//EXPORT DEL authSlice PARA USARLO EN EL STORE
export default authSlice.reducer;