const express = require('express');
const path = require('path')
const app = express();

app.use(express.urlencoded({extended:true}))
app.use('/add-product', (req,res, next) => {
    console.log("First Middleware")
    // res.send('')
    //   console.log('First Middleware')
    res.sendFile(path.join(__dirname, 'views', 'product.html'));
})
app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})
app.use('/', (req,res, next) => {
    console.log('Second Middleware')
    res.sendFile(path.join(__dirname,'views', 'shop.html'))
})
app.listen(3000)
 