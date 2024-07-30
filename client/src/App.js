import logo from './logo.svg';
import './App.css';
import CreateExpenses from './components/forms/CreateExpenses';
import TopBar from './components/topbar/TopBar.jsx'
import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bank from './components/expenses/bank.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {['/', 'create', 'add'].map((path, index) =>
            <Route path={path} element={<Home />} key={index}/>)}
          <Route path='bank' element={<Bank/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
