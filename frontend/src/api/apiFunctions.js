import { publicAxios } from "./apiConfig";

import { authorizedAxios } from "../api/axiosInstance";

export const login=(data)=>{
        return publicAxios.post("/login",data)
}

export const signup=(data)=>{
    return publicAxios.post("/signup",data)
}

export const getAllJobProfile=async()=>{
    const {data}=await authorizedAxios.get(`/jobProfile?page=${page}&limit=${limit}`);
    return data;

}