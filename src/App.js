import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App mt-2 mr-5 d-flex flex-column">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button className="btn btn-primary">Click me</button>
    </div>
  );
}

export default App;
