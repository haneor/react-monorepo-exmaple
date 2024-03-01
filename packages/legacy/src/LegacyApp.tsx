import * as React from 'react';
import {Typography} from "@material-ui/core";

export function LegacyApp({text}) {
  return (
    <>
      <Typography variant="h4">입력한 데이터</Typography>
      <Typography>{text}</Typography>
    </>
  );
}
