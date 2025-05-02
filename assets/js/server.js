const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3006;
const cors = require('cors');
app.use(cors());

// Middlewares
app.use(bodyParser.json());
app.use(express.static('public')); // serve your HTML/CSS/JS

// Route to handle registration
app.post('/register', (req, res) => {

  console.log("register enters");
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  const filePath = path.join(__dirname, 'users.json');

  // Read existing users
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to read user data.' });
    }

    let users = JSON.parse(data);

    // Check if user already exists
    const userExists = users.find(user => user.username === username);
    if (userExists) {
      return res.status(409).json({ message: 'Username already exists.' });
    }

    // Add new user
    users.push({ username, password });

    // Save back to file
    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to save user.' });
      }
      return res.status(201).json({ message: 'User registered successfully!' });
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
