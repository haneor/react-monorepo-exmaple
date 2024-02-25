import * as React from 'react';
import {useToastStore} from "main/src/stores/common/toast.store";

interface App1Props {
  onChange: (e: string) => void;
}

export function App1({
  onChange,
}: App1Props) {
  const { confirm } = useToastStore();

  const onClickButton = () => {
    return confirm('App1 에서 값을 초기화 합니다.', () => onChange(''));
  }

  return (
    <div>
      <h1>App 1</h1>
      <input onChange={e => onChange(e.target.value)} />
      <button onClick={onClickButton} >눌러주세요.</button>
    </div>
  );
}
