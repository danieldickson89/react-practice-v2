import logo from './logo.svg';
import People from './components/People.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <People/>
      </header>
    </div>
  );
}

export default App;
