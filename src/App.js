
import './index.css';
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import Skills from "./components/skills/Skills";
import SpeedDialButton from "./components/speedDial/SpeedDialButton";
import About from "./components/about/About";

function App() {
  return (
    <div className="main">
        <Header/>
        <Welcome/>
        <Skills/>
        <About/>
        <SpeedDialButton/>
    </div>
  );
}

export default App;
