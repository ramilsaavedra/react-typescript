import { useState } from 'react';
import Parent from './props/Parent';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Parent />
    </>
  );
}

export default App;
