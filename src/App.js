import './App.css';
import Alert from './Component/Alert';
import Count from './Component/Count';
import Name from './Component/Name';
import Parent from './Component/Parent';

function App() {
  const name = "Mani"
  return (
    <div className="App">
      <Name name={name}/>
      <Parent />
      <Alert />
      <Count />
    </div>
  );
}

export default App; 
