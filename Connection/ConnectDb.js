import mongoose from "mongoose";
import chalk  from "chalk";
import dotenv from "dotenv"

dotenv.config();

const ConnectDb = async()=>{
        try {
            const conn = await mongoose.connect(process.env.MONGO_URL);
            
            console.log(
                chalk.bgMagenta.white(`Connected to MongoDB ${conn.connection.host}`)
              );
        } catch (error) {
            console.error(chalk.bgRed.white(`Error in connection ${error}`));
        }
}

export default ConnectDb;