import {FC, useState} from 'react';
import * as React from 'react';
import {NewOneApp} from "@packages/newOne";
import {LegacyApp} from "@packages/legacy";
import {useToastStore} from "@packages/root/src/stores/common/toast.store";
import {Box, Button, styled, Typography} from "@mui/material";
import LegacyTopBar from "@packages/legacy/src/components/LegacyTopBar";
import NewTopBar from "@packages/newOne/components/NewTopBar";

const Home: FC = () => {
  const [data, setData] = useState<string>('');
  const { confirm } = useToastStore();

  const onClickButton = () => confirm('Root 에서 값을 초기화 합니다.', () => setData(''));
  return (
    <RootContainer>
      <LegacyTopBar />
      <Box padding="2rem">
        <Typography variant="h4" color="primary">Root Application</Typography>
        <Button onClick={onClickButton}>Root 초기화</Button>

        <Box display="flex" flexDirection="column">
          <NewOneApp onChange={setData} />
        </Box>

        <Box display="flex" flexDirection="column">
          <LegacyApp text={data} />
        </Box>
      </Box>
      <NewTopBar />
    </RootContainer>
  );
};

export default Home;

const RootContainer = styled("div")`
  background-color: wheat;
  height: 100vh;
  width: 100vw;
`;
