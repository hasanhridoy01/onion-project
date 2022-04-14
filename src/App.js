import logo from './logo.svg';
import './App.css';
import Header from './components/CommonPages/Header/Header';
import Banner from './components/CommonPages/Banner/Banner';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Home></Home>
    </div>
  );
}

export default App;
