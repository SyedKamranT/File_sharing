import express from 'express'
const app = express()
const port = 5000


//we are creating a route for the home page
app.get('/',(req,res)=>{
    res.send('Hello welcome to file sharing website')
})











// here the main file is running
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

