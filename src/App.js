import "./App.css";

function App() {
  return (
    <body>
      <div className="App">
        <div className="container">
          <h1> Weather App </h1>
        </div>

        <footer>
          This project was coded by Shanay Hazell and is {""}
          <a
            href="https://github.com/ShanayH/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          {/* later you can add a src to your personal page as well */}
        </footer>
      </div>
    </body>
  );
}

export default App;
