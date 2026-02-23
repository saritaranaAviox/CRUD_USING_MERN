import axios from 'axios';

console.log(import.meta.env)
export const BASEURL= import.meta.env.VITE_APP_BASE_URL
import  {getAccessToken} from "../utils/auth";

// for public routes
export const publicAxios=axios.create({
    baseURL:BASEURL,
    headers:{
        "Content-Type":"application/json"
    }
})

// for private routes
export const authorizedAxios=axios.create({
    baseURL:BASEURL,
    headers:{
        "Content-Type":"application/json"    
    }
});

authorizedAxios.interceptors.request.use(
    (config)=>{
        const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
        return config;

    },
    (error)=>Promise.reject(error)
    
);

authorizedAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);