// server.js
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.post('/register', (req, res) => {
  const newUser = req.body;
  const users = JSON.parse(fs.readFileSync('users.json'));
  
  if (users.find(u => u.username === newUser.username)) {
    return res.status(409).json({ message: 'User already exists' });
  }

  users.push(newUser);
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
  res.status(201).json({ message: 'User registered successfully' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
