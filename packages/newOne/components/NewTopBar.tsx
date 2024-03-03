import {FC} from 'react';
import * as React from 'react';
import {AppBar, Box, Button, Fab, IconButton, styled, Toolbar, Typography} from "@mui/material";

const NewTopBar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          New One Bottom Bar
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NewTopBar;