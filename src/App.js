import "./App.css";
import Header from "./components/Header/Header";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        SERVICES PROVIDED FOR THE NEEDY!
      
      </header>
      <Header/>
      <main>
        <Forecast />{" "}
      </main>
      <footer>Page created by TEAM Sawyer, Wade, Shawn, Steve, Scott!!</footer>
    </div>
  );
}

export default App;
//notes here
