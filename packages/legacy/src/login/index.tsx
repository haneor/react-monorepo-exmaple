import {FC} from 'react';
import * as React from 'react';
import {Box, Link, makeStyles, styled, Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '4rem',
    gap: '2rem'
  }
}));

const Login: FC = () => {
  // @ts-ignore
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Link color="textPrimary" href="/">뒤로 돌아가기</Link>
      <Typography variant="h4">로그인</Typography>
    </Box>
  );
};

export default Login;
