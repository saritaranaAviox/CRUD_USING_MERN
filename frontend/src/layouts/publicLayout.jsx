import React from 'react'

import {Navigate,Outlet} from 'react-router-dom';
const PublicLayout=()=>{

    const token=localStorage.getItem("access_token")

    return(
        <div>
            {token ?<Navigate to="/dashboard"/>:<Outlet/>}
        </div>
    )

}
export default PublicLayout