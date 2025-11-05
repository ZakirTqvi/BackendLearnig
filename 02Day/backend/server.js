import express from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res)=>{
    res.send('server is ready')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
  {
    id: 1,
    title: "Tech Joke",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 2,
    title: "Math Joke",
    content: "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else."
  },
  {
    id: 3,
    title: "Dad Joke",
    content: "I told my wife she should embrace her mistakes... She gave me a hug."
  },
  {
    id: 4,
    title: "Computer Joke",
    content: "Why was the computer cold? It left its Windows open!"
  },
  {
    id: 5,
    title: "Network Joke",
    content: "Why did the Wi-Fi go to therapy? It couldn’t find a stable connection."
  }
];
    res.send(jokes);
});

app.listen(port, ()=>{
    console.log(`server is listening at port ${port}`)
})