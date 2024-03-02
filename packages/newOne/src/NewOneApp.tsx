import * as React from 'react';
import {useToastStore} from "root/src/stores/common/toast.store";
import {Box, Button, TextField, Typography} from "@mui/material";

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
    <Box dir>
      <Typography variant="h5" color="primary">New one app</Typography>
      <TextField
        onChange={e => onChange(e.target.value)}
      />
      <Button variant="outlined" onClick={onClickButton} >눌러주세요.</Button>
    </Box>
  );
}
