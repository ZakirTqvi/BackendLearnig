
require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

const user = {
    id: 1,
    name: "Zakir Taqvi",
    email: "zakir@example.com",
    age: 22,
    isVerified: true,
    interests: ["coding", "data science", "reading"],
    address: {
      city: "Lucknow",
      country: "India"
    }
  };


app.get('/', (req, res) => {
  res.send('Home Route')
})

app.get('/userdata', (req, res) => {
    res.json(user);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
