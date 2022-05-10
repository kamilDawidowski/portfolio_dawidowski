import './index.css';
import Header from "./components/header/Header";
import SpeedDialButton from "./components/speedDial/SpeedDialButton";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainSite from "./MainSite";
import MonitoringKafka from "./components/monitoringKafka/MonitoringKafka";

function App() {
  return (
    <div className="main">
        <Router>
        <Header/>
        <Routes>
            <Route path="/" exact element={<MainSite/>}/>
            <Route path="/personalProject/java-monitoring" exact element={<MonitoringKafka/>}/>
            {/*<Route  component={EmptySite}/>*/}
        </Routes>

        <SpeedDialButton/>
        </Router>
    </div>
  );
}

export default App;
