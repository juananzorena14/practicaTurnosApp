import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import turnosSlice from "../slices/turnosSlice";

export const store = configureStore({
  reducer:{
    //LE PONEMOS EL NOMBRE QUE QUERAMOS Y LLAMAMOS AL SLICE
    auth: authSlice,
    turnos: turnosSlice,
  }
})