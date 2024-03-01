import {FC, useState} from 'react';
import * as React from 'react';
import {NewOneApp} from "@packages/newOne";
import {LegacyApp} from "@packages/legacy";
import {useToastStore} from "@packages/root/src/stores/common/toast.store";

const Home: FC = () => {
  const [data, setData] = useState<string>('');
  const { confirm } = useToastStore();

  const onClickButton = () => confirm('Root 에서 값을 초기화 합니다.', () => setData(''));
  return (
    <>
      <h1>Home Application</h1>
      <NewOneApp onChange={setData} />
      <LegacyApp text={data} />

      <button onClick={onClickButton} >눌러주세요.</button>
    </>
  );
};

export default Home;
