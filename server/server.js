const express = require('express');

const app = express();
app.get('/api',(req,res)=>{
    let {fname,lname} = req.body;
    console.log(fname,lname);
})
app.listen(5000,(err)=>{
    if(err) throw err;
    console.log('server started on 5000');
})