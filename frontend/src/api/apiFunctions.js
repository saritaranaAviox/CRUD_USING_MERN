import { publicAxios } from "./apiConfig";

export const login=(data)=>{
        return publicAxios.post("/login",data)
}

export const signup=(data)=>{
    return publicAxios.post("/signup",data)
}