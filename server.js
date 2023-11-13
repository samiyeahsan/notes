const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001 ;
const { v4: uuidv4 } = require('uuid');

// TODO: Invoke app.use() and serve static files from the '/public' folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get('/api/notes', (req, res) => { 
fs.readFile('./db/db.json', 'utf8',(err, data) => {
  if (err) {
    console.log(err)
    
  }
  const notes = JSON.parse (data)
  return res.json(notes)
})
})
app.post('/api/notes', (req, res) => {
  // uuidv4();
  console.log(req.body)
  const newNotes = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4()
  }
  console.log(newNotes)
  fs.readFile('./db/db.json', 'utf8',(err, data) => {
    if (err) {
      console.log(err)
      
    }
    const notes = JSON.parse (data)
    notes.push(newNotes)
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) =>{
      return res.json(notes)
    })
  })
})
 
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

// TODO: Create a route that will serve up the `public/paths.html` page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
