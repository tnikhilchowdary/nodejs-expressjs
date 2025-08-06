const express = require("express");
const app = express();

const members = [
  {
    id: 1,
    name: 'TNC',
    email: 'tnc@gmail.com',
    status: 'active'
  },
  {
    id: 2,
    name: 'Nikhil',
    email: 'Nikhil@gmail.com',
    status: 'active'
  },
  {
    id: 3,
    name: 'chowdary',
    email: 'chowdary@gmail.com',
    status: 'active'
  }
];

app.get("/api/members", (req, res) => {
  res.json(members);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
