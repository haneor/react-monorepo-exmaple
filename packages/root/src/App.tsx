import * as React from 'react';
import { useState } from "react";
import { NewOneApp } from '@packages/newOne';
import { LegacyApp } from '@packages/legacy';
import './App.css';
import {useToastStore} from "./stores/common/toast.store";

function App() {
  const [data, setData] = useState<string>('');
  const { confirm } = useToastStore();

  const onClickButton = () => confirm('Root 에서 값을 초기화 합니다.', () => setData(''));

  return (
    <div>
      <h1>Root Application</h1>
      <NewOneApp onChange={setData} />
      <LegacyApp text={data} />

      <button onClick={onClickButton} >눌러주세요.</button>
    </div>
  );
}

export default App;
