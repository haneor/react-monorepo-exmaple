import React, {useState} from 'react';
import './App.css';
import { App1 } from 'app1';
import { App2 } from 'app2';

function App() {
  const [data, setData] = useState('');

  return (
    <div>
      <h1>Main Application</h1>
      <App1 onChange={text => setData(text)} />
      <App2 text={data} />
    </div>
  );
}

export default App;
