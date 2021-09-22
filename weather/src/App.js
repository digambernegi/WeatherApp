import Weather from "./weather.js";
import './App.css';
function App() {
  return (
    <div className="App">
    <h2>TEMPERATURE</h2>
    <Weather/>

    </div>
  );
}

export default App;
//api.openweathermap.org/data/2.5/weather?q=pune&appid=65c33c67af2692b01c733d9b2aec0eda