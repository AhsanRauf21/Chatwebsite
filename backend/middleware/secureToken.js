import jwt from 'jsonwebtoken'
import UserModel from '../schema/user.schema.js'

const secureToken = async (req,res,next) => {

    try {

        const token = req.cookies.jwt
        
        if(!token) throw new Error("No token, authorization denied")

       const decodeToken = jwt.verify(token,process.env.SECRET_KEY)     
       if(!decodeToken) throw new Error("Invalid token")

        const user  = await UserModel.findById(decodeToken.userId)
        

        req.user = user
        
        next()
        
        
    } catch (error) {
        console.log(error);
        
    }


}
export {secureToken}