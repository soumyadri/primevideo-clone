import logo from './logo.svg';
import './App.css';
import { Home } from './Component/Home/Home';
import { Header } from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;