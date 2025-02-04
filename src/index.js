import connectDB from "./db/db.js";
import app from "./app.js";
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT

connectDB()
.then(
    app.listen(port,()=>{
        console.log(`port is ${port}`)

    })
)
.catch((err)=>{
    console.log(`error -> ${err}`)
})
