import React from 'react'
import { Route, Routes } from 'react-router'
import App from './App'
import Login from './pages/Login'
import Admin from './Admin/Admin'
import Dashboard from './pages/adminPages/Dashboard'
import Users from './pages/adminPages/Users'
import Products from './pages/adminPages/Products'
import Register from './pages/Register'
import SinglePage from './pages/SinglePage'

function Routers() {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/admin' element={<Admin />} >
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='users' element={<Users />} />
                <Route path='products' element={<Products />} />
                <Route path='product/:id' element={<SinglePage />} />

            </Route>
        </Routes>
    )
}

export default Routers