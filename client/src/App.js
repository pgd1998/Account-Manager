import logo from './logo.svg';
import './App.css';
import CreateExpenses from './components/forms/CreateExpenses';
import TopBar from './components/topbar/TopBar.jsx'
import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Bank from './components/expenses/bank.jsx';
import store from './store/config.js';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Routes>
          {['/', 'create', 'add'].map((path, index) =>
            <Route path={path} element={<Home />} key={index}/>)}
          <Route path='bank' element={<Bank/>}/>
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
