import jwt from 'jsonwebtoken'
export const generateToken = (id) => {
    if (!process.env.JWT_SECRET_KEY) {
        throw new Error("JWT_SECRET_KEY is not defined");
    }
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY,
        {
            expiresIn: "7d"
        });
};

export const verifyToken=(token)=>{
    if (!process.env.JWT_SECRET_KEY) {
        throw new Error("JWT_SECRET_KEY is not defined");
    }
    return jwt.verify(token,process.env.JWT_SECRET_KEY)
}