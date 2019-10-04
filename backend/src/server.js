const express = require('express');
const mongoose = require('mongoose');
const routes  = require('./routes');
const cors  = require('cors');
const path  = require('path');

const app = express();
mongoose.connect('mongodb+srv://renato:ybr1251@omnistack-ldcum.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

// app.get('/',(req,res) =>{
//     res.json({message:'HELO WORDxxx'});
// });

// //query params
// app.get('/users',(req,res) =>{
//     res.json({idade:req.query.idade});
// });

// //alterando usuário ou deletando
// app.put('/users/:id',(req,res) =>{
//     res.json({id:req.params.id});
// });




app.listen(3333);