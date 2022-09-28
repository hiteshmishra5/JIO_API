//  import express
const express=require('express');
const patientRouter=require("./src/patients/routes");
const userRouter=require("./src/User/user.routes");
require('dotenv').config();
const app=express();


let PORT;
process.env.STATUS==='Production'?(PORT=process.env.PROD_PORT):(PORT=process.env.DEV_PORT);
const port=PORT;
console.log(port);
// get/post json data
app.use(express.json());


// default app router
app.get('/', (req, res) => {
    res.send(`Hey I'm listesing on port ${port}`)      
})

// app routing with APIs
app.use("/api/v1/patientBooking", patientRouter);

// user autientication**
app.use("/api/v1/users",userRouter);

// post default router
app.post('/', (req, res) => {
    res.send(`POST request to the homepage ${port}`);
});

app.listen(port, () => { console.log(`Server is listening on port ${port}`)})


