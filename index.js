const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use (express.json());

const port = 5000;
app.get('/', (req, res) =>{
    res.send('Hello , I am excited leraning node and express here')
});
const users =[
    { id:0, name:'Rana', email: 'rana134@gmail.com',phone:'01748063755'},
    { id:1, name:'Rohan', email: 'rohan134@gmail.com',phone:'01648063755'},
    { id:2, name:'Habib', email: 'Habib134@gmail.com',phone:'01648063855'},
    { id:3, name:'Tamanna', email: 'tamanna134@gmail.com',phone:'01628063755'},
    { id:4, name:'Ana', email: 'ana134@gmail.com',phone:'01948063755'},
    { id:5, name:'Banna', email: 'banna134@gmail.com',phone:'01958063755'},
]

app.get('/users', (req, res) =>{
    const search = req.query.search;
    //use query parameter
  if(search){
      const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
      res.send(searchResult);

  }
  else{
      res.send(users)
  }

});
//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))\
    res.json(newUser)
})

//dynamic api

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id];
   res.send(user);
})
app.get('/fruits',(req, res)=>{
    res.send(['mango', 'oranges', 'banana', 'JackFruit'])
})


app.get('/fruits/mangoes/fazli',(req, res) =>{
    res.send('Yummy Yumy tok marka fazli');
})


app.listen(port, ()=>{
    console.log('Listening to port', port);
});