
import ClockName from "./components/AppName"
import ClockSlogan from "./components/Slogan";
import CurrentTime from "./components/CurrentTime";

function App() {
  return <center className="clock-container">
    <ClockName />
    <ClockSlogan />
    <CurrentTime />
  </center>
}

export default App;