import { useState } from 'react';
import './App.css';

function App() {
  const [age,setAge] = useState(0)
  const [yläsyke,setYläsyke] = useState(0)
  const [alasyke,setAlasyke] = useState(0)
  

  function calculate() {
   setYläsyke((200-age)*0.85)
   setAlasyke((200-age)*0.65)
    
  }
  return (
    <div id="cointainer">
    <h3>Heart rate limits calculator</h3>
    <form>
      <div>
        <label>Age</label>
        <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
      </div>
      <div>
        <label>Heart rate limits</label>
        <output type="block"> value={alasyke.toFixed(0)}-{yläsyke.toFixed(0)} </output>
      </div>
        <button type="button" onClick={calculate}>Calculate</button>
        </form> 
    </div>
    
  );
}

export default App;
