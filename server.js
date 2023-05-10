const express = require('express')
const app = express()


app.use(express.static(`${__dirname}/public`))


app.get('/api/test',(req,res)=>{
    res.send('hello');
})



app.listen(4000, () => console.log(`server running on 4000`))

