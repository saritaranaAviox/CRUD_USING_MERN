import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
const PrivateLayout = () => {
    const token=localStorage.getItem("access_token")
    if(!token)
    {
        return <Navigate to="/login" replace/>
    }
    return <Outlet/>
  
}

export default PrivateLayout
