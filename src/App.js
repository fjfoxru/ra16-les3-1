import logo from './logo.svg';
import Stars from './components/Stars/Stars';
import './App.css';

function App() {
  const countStars = 5;

  return (
    <div className="App">
      <Stars count={countStars}/>
    </div>
  );
}

export default App;
