import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Hello React!</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke, index) => {
        return (
          <div
            key={joke.id}
            style={{
              backgroundColor: "#f5f5f5",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "10px",
              color: "#000"

            }}
          >
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
