const express = require('express');
const app = express();


app.get('/resume', (req, res) => {
  res.download('resume.pdf');
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
