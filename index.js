const express = require('express');
const app = express();
const port = 2001;

const students=[
    {
        id:1,
        Title:'its going',
        Name:'John Doe',
        Duration:20,
    },
    {
        id:2,
        Title:'its going',
        Name:'John Doe',
        Duration:20,
    },
    {
        id:3,
        Title:'its going',
        Name:'John Doe',
        Duration:20,
    },
    {
        id:4,
        Title:'its going',
        Name:'John Doe',
        Duration:20,
    },
    {
        id:5,
        Title:'its going',
        Name:'John Doe',
        Duration:20,
    },
    {
        id:5,
        Title:'its going',
        Name:'John Doe',
        Duration:20,
    },
    {
        id:6,
        Title:'its going',
        Name:'John Doe',
        Duration:20,
    },
]


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})
app.get('/students',(req,res)=>{
    res.json(students);
    console.log('welcome');
    
});


// app.listen(port,()=>{
//     console.log("welcome");
    
// })


// app.get("/students",(req,res)=>{
//     res.sendFile(__dirname + "/index.html")
//     // C:\Users\HomePC\Desktop\web development\level 3\class one\index.html
// });