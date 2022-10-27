const express = require('express')
const app =express()
const port=3001
const path=require('path')

app.get('/user', (req,res)=>
{
    res.send('Hello World')
})

app.get('/image', (req,res)=>
{
    let imagePath=path.join(__dirname,'imag1.jpg');
    console.log(imagePath)
    res.sendFile(imagePath)
}) 
app.get('/dynamicimage', (req,res)=>
{
    //let imagePath=path.join(__dirname,'..','imag1.jpg');
    console.log(req.query.id)
    res.send(imag1)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
