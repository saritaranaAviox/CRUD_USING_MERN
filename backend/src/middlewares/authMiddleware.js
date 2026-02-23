import { verifyToken } from '../utils/jwt.js'
import User from '../models/userSchema.js';


export const protect = async (req, res, next) => {
    try {
        console.log(req)
        let token;
        if (req.headers?.authorization && req.headers?.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }   
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decode = verifyToken(token);
        req.user = await User.findById(decode.id).select("-password");
        next();
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error })
    }
}