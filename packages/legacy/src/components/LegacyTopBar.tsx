import {FC} from 'react';
import * as React from 'react';
import {AppBar, Button, IconButton, Link, makeStyles, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const LegacyTopBar: FC = () => {
  // @ts-ignore
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Legacy Top Bar
          </Typography>
          <Link color="inherit" href="/login">로그인 이동</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default LegacyTopBar;
