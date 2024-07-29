import logo from './logo.svg';
import './App.css';
import CreateExpenses from './components/forms/CreateExpenses';
import TopBar from './components/topbar/TopBar.jsx'
import Home from './pages/Home.jsx';
function App() {
  return (
    <div className="App">
      {/* <CreateExpenses/> */}
      <Home/>
    </div>
  );
}

export default App;
