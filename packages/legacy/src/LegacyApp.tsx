import * as React from 'react';
import {ThemeProvider, Typography} from "@material-ui/core";
import GlobalTheme from "../src/common/globalTheme";

export function LegacyApp({text}) {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Typography variant="h4" color="primary">Legacy 출력</Typography>
      <Typography color="primary">{text}</Typography>
    </ThemeProvider>
  );
}
