import {FC, useState} from 'react';
import * as React from 'react';
import {NewOneApp} from "@packages/newOne";
import {LegacyApp} from "@packages/legacy";
import {useToastStore} from "@packages/root/src/stores/common/toast.store";
import {styled, Typography} from "@mui/material";
import LegacyTopBar from "@packages/legacy/src/components/LegacyTopBar";

const Home: FC = () => {
  const [data, setData] = useState<string>('');
  const { confirm } = useToastStore();

  const onClickButton = () => confirm('Root 에서 값을 초기화 합니다.', () => setData(''));
  return (
    <RootContainer>
      <LegacyTopBar />
      <Typography variant="h4" color="primary">Home Application</Typography>
      <NewOneApp onChange={setData} />
      <LegacyApp text={data} />

      <button onClick={onClickButton} >눌러주세요.</button>
    </RootContainer>
  );
};

export default Home;

const RootContainer = styled("div")`
  background-color: wheat;
  height: 100vh;
  width: 100vw;
`;
