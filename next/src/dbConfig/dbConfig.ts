import mongoose, { mongo } from "mongoose";


export async function connect() {

    try {

        mongoose.connect(process.env.MONGO_URI!)

        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("successfully connected")
        })
        connection.on('error', (err) => {
            console.log("Not successfully connected" + err)
            process.exit()
        })
        
    } catch (error) {
        console.log(error);
    }
    
}