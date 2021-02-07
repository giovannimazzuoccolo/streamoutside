import "./App.css";
//import Speedometer from "./speedometer/speedometer";
import Stepcounter from "./stepcounter/stepcounter";

function App() {
  return (
    <div className="App">
      {/* <Speedometer visible draggable /> */}
	<Stepcounter visible draggable />
    </div>
  );
}

export default App;
