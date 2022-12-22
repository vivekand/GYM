// import express module 
const express =require("express");
const fs=require("fs");
// const { get } = require("express/lib/response");
const path=require('path')

// made an app 
const app=express();
const port=80;

//EXPRESS SPECIFIC STUFF 
app.use('/static',express.static('static')); // for serving static file
// PUG SPECIFIC PUG
app.use(express.urlencoded())
app.set('view engine', 'pug') // set the template engine as pug
app.set('views',path.join(__dirname,'views')); // set the view directory 
// END POINT 
app.get('/',(req,res)=>{
    const con="This is the best content on the internet so far so use wisely ";
    const param ={'title':'pubg is the best game','content':con}
    res.status(200).render('index.pug',param);
})

app.post('/',(req,res)=>{

    console.log(req.body);
    nam=req.body.name  
    age=req.body.age 
    gender=req.body.gender  
    address=req.body.address  
    more=req.body.more 
    let outputTowrite=`The name of clinet is ${nam}, age is ${age}, gender is ${gender}, residing at ${address} ,more about him/her ${more} `;
    fs.writeFileSync('output.txt',outputTowrite); 
    const param ={'message':'Your from has been submitted successfully'}
    res.status(200).render('index.pug',param);
})
// START THE SERVER 
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})