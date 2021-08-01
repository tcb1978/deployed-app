import logo from './logo.svg';
import Main from './components/main';
import './App.css';

const style = {
  background: 'rgba(249, 84, 21, .5)',
  bottom: 0,
};

function App() {
  return (
    <div className="App">
      <header className="App-header p-3" style={style}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Main />
      <footer className="App-footer container-fluid p-3" style={style}>
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
