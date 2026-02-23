import {Routes,Route} from 'react-router-dom';

import React from 'react'
import PublicLayout from '../layouts/publicLayout';
import PrivateLayout from '../layouts/privateLayout';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  return (
   <Routes>
    <Route element={<PublicLayout/>}>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
    </Route>

    <Route element={<PrivateLayout/>}>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Route>
   </Routes>
  )
}

export default AppRoutes
