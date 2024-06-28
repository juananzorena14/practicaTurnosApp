import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  //LÓGICA BÁSICA DE LOGIN
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //useDispatch() PARA PODER EJECUTAR LAS ACTIONS 
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault();
    
    //VALIDACIONES BÁSICAS
    if (username === "admin" && password === "admin123"){
      dispatch(login({username: username, rol: "admin"}));
      navigate("/admin");
      return
    } else {
      dispatch(login({username: username, rol: "usuario"}));
      navigate("/")
    }
  };

  return (
    <div className='mt-5 p-3'>
      <h2>Login</h2>
      <form className='w-50'>
        <div className='form-group'>
          <label>UserName</label>
          <input 
            type="text" 
            className='form-control' 
            onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input 
            type="password" 
            className='form-control' 
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button 
          type='submit' 
          className='mt-3 btn btn-primary'
          onClick={handleLogin}>
            Login
        </button>
      </form>
    </div>
  )
}

export default LoginScreen