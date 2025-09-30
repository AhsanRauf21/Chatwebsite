import mongoose from "mongoose";

export const ConnectDB = async () => {

    try {
            await mongoose.connect(process.env.MONGO_URI)
            console.log("db is connected");
            
    } catch (error) {
        await mongoose.disconnect()
        console.log("Error connecting db" ,error);
        
    }
}

