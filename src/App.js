
import './App.css';
import AttorneyProvider from './component/Context/AttorneyContext';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <AttorneyProvider>

    <Home />
      </AttorneyProvider>
    </div>
  );
}

export default App;
