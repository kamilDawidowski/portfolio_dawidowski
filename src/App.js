
import './index.css';
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import Skills from "./components/skills/Skills";
import SpeedDialButton from "./components/speedDial/SpeedDialButton";
import About from "./components/about/About";
import Wave from "./components/wave/Wave";

function App() {
  return (
    <div className="main">
        <Header/>
        <Welcome/>
        <Skills/>
        <About/>
        <Wave/>
        <SpeedDialButton/>
    </div>
  );
}

export default App;
