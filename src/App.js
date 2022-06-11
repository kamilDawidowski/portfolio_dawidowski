import './index.css';
import Header from "./components/header/Header";
import SpeedDialButton from "./components/speedDial/SpeedDialButton";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainSite from "./MainSite";
import MonitoringKafka from "./components/monitoringKafka/MonitoringKafka";
import DockerKafka from "./components/about/publication/allPublication/docker-kafka/DockerKafka";

function App() {
  return (
    <div className="main">
        <Router>
        <Header/>
        <Routes>
            <Route path="/" exact element={<MainSite/>}/>
            <Route path="/personalProject/java-monitoring" exact element={<MonitoringKafka/>}/>
            <Route path="/publication/impact-kafka-on-docker" exact element={<DockerKafka/>}/>
            {/*<Route  component={EmptySite}/>*/}
        </Routes>

        <SpeedDialButton/>
        </Router>
    </div>
  );
}

export default App;
