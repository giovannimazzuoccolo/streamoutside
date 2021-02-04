import "./App.css";
import Speedometer from "./speedometer/speedometer";

function App() {
  return (
    <div className="App">
      <Speedometer visible draggable />
      <p>Speedometer test</p>
    </div>
  );
}

export default App;
