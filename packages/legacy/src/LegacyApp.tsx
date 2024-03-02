import * as React from 'react';
import {ThemeProvider, Typography} from "@material-ui/core";
import GlobalTheme from "../src/common/globalTheme";

export function LegacyApp({text}) {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Typography variant="h4" color="primary">입력한 데이터</Typography>
      <Typography>{text}</Typography>
    </ThemeProvider>
  );
}
