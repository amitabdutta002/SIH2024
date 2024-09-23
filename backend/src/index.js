import dotenv from "dotenv";
import connectdb from "./db/index.js";
import { app } from "./app.js";

dotenv.config(
    {path:'./.env'}
)

connectdb()
.then(
    app.listen(process.env.PORT ,()=>{
        console.log(`Server is listening on port ${process.env.PORT}`);
    })
)
.catch((err)=>{
    console.log("Server is unable to listen",err);
})