import logo from './logo.svg';
import pepe from './pepe.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pepe} className="App-logo" alt="logo" />
        <p>
          <code>UI</code> er kaj choltese vai wait koren
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React to help us :")
        </a>
      </header>
    </div>
  );
}

export default App;
