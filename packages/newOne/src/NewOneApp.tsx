import * as React from 'react';
import {useToastStore} from "root/src/stores/common/toast.store";
import {Box, Button, TextField, ThemeProvider, Typography} from "@mui/material";
import GlobalTheme from "../common/globalThemeContainer/theme";

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
    <ThemeProvider theme={GlobalTheme}>
      <Box display="flex" flexDirection="column" gap="0.5rem">
        <Typography variant="h5" color="primary">New one app</Typography>
        <TextField
          onChange={e => onChange(e.target.value)}
        />
        <Button variant="contained" onClick={onClickButton} >New One 초기화</Button>
      </Box>
    </ThemeProvider>
  );
}
