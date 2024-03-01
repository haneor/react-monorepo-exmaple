import * as React from 'react';
import { useState } from "react";
import { App1 } from '@packages/newOne';
import { App2 } from '@packages/legacy';
import './App.css';
import {useToastStore} from "./stores/common/toast.store";

function App() {
  const [data, setData] = useState<string>('');
  const { confirm } = useToastStore();

  const onClickButton = () => confirm('Main 에서 값을 초기화 합니다.', () => setData(''));

  return (
    <div>
      <h1>Main Application</h1>
      <App1 onChange={setData} />
      <App2 text={data} />

      <button onClick={onClickButton} >눌러주세요.</button>
    </div>
  );
}

export default App;
