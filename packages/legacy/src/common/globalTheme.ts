import { createMuiTheme } from '@material-ui/core';
const GlobalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1e1e1e',
      contrastText: '#FFF',
    },
    error: {
      main: '#e20909',
    },
  },
  typography: {
    h1: {},
    h2: {},
    h3: {
      fontSize: '18px',
    },
    h4: {},
    h5: {},
    body1: {
      fontSize: '14px',
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        marginLeft: '0',
        marginRight: '0',
      },
      fixed: {
        width: '1097px!important',
        ['@media (min-width:320px)']: {
          width: '100%',
          maxWidth: 'none',
        },
      },
    },
    MuiTextField: {
      root: {
        width: '305px',
      },
    },
    MuiSelect: {
      root: {
        width: '174px',
      },
    },
    MuiButton: {
      root: {
        padding: '6px 15px',
        '& .MuiButton-startIcon': {
          marginRight: '3px',
        },
      },
    },
    MuiFormLabel: {
      root: {},
    },
    MuiDivider: {},
    MuiPaper: {
      root: {},
    },
  },
});
export default GlobalTheme;
