import mongoose, { Mongoose } from "mongoose";
const dbConnect = async()=>{
    try {
        mongoose.set("strictQuery",false);
        const connected =mongoose.connect(process.env.MONGO_URL);
        console.log(`mongodb connected ${(await connected).connection.host}`);

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1)
    }
}
export default dbConnect;

//ERe12onbY6jgxNWa
//012345678
//jGNosmIN913sF3U0
//mongodb+srv://AMANUEL:jGNosmIN913sF3U0@fs-01.cujoe.mongodb.net/?retryWrites=true&w=majority&appName=FS-01