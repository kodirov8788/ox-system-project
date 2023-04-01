import React, { useContext } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import App from './App'
import Login from './pages/Login'
import Admin from './Admin/Admin'
import Dashboard from './pages/adminPages/Dashboard'
import Users from './pages/adminPages/Users'
import Products from './pages/adminPages/Products'
import Register from './pages/Register'
import SinglePage from './pages/SinglePage'
import { AuthContext } from './context/AuthContext'


function Routers() {
    const { isLogged } = useContext(AuthContext)
    const ProtectedRoute = ({ children }) => {

        let location = useLocation();
        if (!isLogged) {
            return <Navigate to="/login" state={{ from: location }} replace />
        }
        return children

    };

    return (
        <Routes>
            <Route path='/' element={<ProtectedRoute><App /></ProtectedRoute>} />
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