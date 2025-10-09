import './App.css';
import HomePage from './components/HomePage';
import FMSScoresheet from './components/FMSScoreSheet/FMSScoresheet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const header = <h1>This is my Functional Movement Screen Corrective Generator</h1>
  return (
    <div className='app'>

      {header}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-fms" element={<FMSScoresheet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
