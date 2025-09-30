import generateToken from "../jwt/GenerateToken.js";
import UserModel from "../schema/user.schema.js";

const register = async (req, res) => {
  try {
    if (!req.body) throw new Error("Enter Data");
    const { username, email, password, confirmPassword } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) throw new Error("User already exists");

    if (confirmPassword !== password) throw new Error(`Password don't match`);

 const user =    await UserModel.create({
      username,
      email,
      password
    });

generateToken(user._id , res)

    res.status(200).send({ message: "regsitration Successful"  , userData:{
      id:user._id,
      username:user.username,
      email:user.email
  } });
  } catch (error) {
    res.status(500).send({ message: error.message});  
  }
};



// Login controller


const login = async (req, res) => {
  try {
    if (!req.body) throw new Error("No data received");

    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Email or Password not exists");
    }
    const existingUser = await UserModel.findOne({ email });

    if (!existingUser) throw new Error("User doesn't exists");

if(existingUser.password!== password) throw new Error("Invalid Email or Password")


generateToken(existingUser._id,res)
    res.status(200).send({ message: "login successful"  , userData:{
      id:existingUser._id,
      username:existingUser.username,
      email:existingUser.email
  }});
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};


// logout Controller

const logout = async (req, res) => {
  try {
    // res.clearCookie("jwt", {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict"
    // });
    res.status(200).send({ message: "User logged out successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};


// Alluser

const AllUsers = async (req,res) => {

try {
  const loggedInUser = req.user._id
const allUsers = await UserModel.find({_id:{$ne:loggedInUser}}).select('-password')



res.status(200).send(allUsers)

} catch (error) {
  
res.status(500).send({message:error.message})

}

}




export { register, login,logout,AllUsers};
