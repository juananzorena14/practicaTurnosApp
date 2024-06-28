import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from '../pages/LoginScreen'
import HomeScreen from '../pages/HomeScreen'
import AdminScreen from '../pages/AdminScreen'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/admin' element={<AdminScreen/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRouter