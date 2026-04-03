import express from 'express';
import dotenv from 'dotenv';
import createUsers from './controllers/usercontroller.js';

dotenv.config();
const app =express();


app.use(express.json());
app.get("/",(req,res)=>{
    console.log("server is listening");
})
app.get('/user',createUsers);
app.listen(3000,()=>{
    console.log(`server is listining to port no${3000}`);
});
