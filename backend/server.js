const express = require('express');
const cors = require('cors');
const app = express();
const port = 5173;

app.use(cors());

const data = [
  { Id: '', Name: '', Description: '', Price: ''},
];

app.get('https://localhost:7056/swagger/index.html', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
