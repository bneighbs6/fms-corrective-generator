import './App.css';
import HomePage from './components/HomePage';
import FMSScoresheet from './components/FMSScoreSheet/FMSScoresheet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const header = <h1>This is my Functional Movement Screen Corrective Generator</h1>
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
