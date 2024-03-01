import * as React from 'react';
import {useToastStore} from "root/src/stores/common/toast.store";

interface NewOneAppProps {
  onChange: (e: string) => void;
}

export function NewOneApp({
  onChange,
}: NewOneAppProps) {
  const { confirm } = useToastStore();

  const onClickButton = () => {
    return confirm('NewOneApp 에서 값을 초기화 합니다.', () => onChange(''));
  }

  return (
    <div>
      <h1>App 1</h1>
      <input onChange={e => onChange(e.target.value)} />
      <button onClick={onClickButton} >눌러주세요.</button>
    </div>
  );
}
