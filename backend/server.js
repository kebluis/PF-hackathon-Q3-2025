const express = require('express');
const app = express();

app.get('/userinfo', (req, res) => {
  // Example static user data
  res.json({ id: 1, username: 'demo', email: 'demo@example.com' });
});

app.listen(3000, () => {
  console.log('API server listening on port 3000');
});
