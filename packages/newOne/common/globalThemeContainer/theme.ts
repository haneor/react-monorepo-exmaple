import { createTheme } from '@mui/material/styles';

const GlobalTheme = createTheme({
	typography: {
		fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
	},
	palette: {
		primary: {
			main: '#556b2f',
		},
		text: {
		  primary: '#556b2f',
		},
	},
	components: {
		MuiInputBase: {
			styleOverrides: {
				root: {
					borderRadius: 16,
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: 30,
				},
			},
		},
		MuiTabs: {
			styleOverrides: {
				root: {
					backgroundColor: '#FFFFFF',
					'.MuiTabs-indicator': {
						height: 3,
					},
					button: {
						fontSize: 16,
						'&[aria-selected=true]': {
							fontWeight: 700,
						},
						'&[aria-selected=false]': {
							fontWeight: 400,
						},
					},
				},
			},
		},
		MuiDrawer: {
			styleOverrides: {
				paper: {
					maxWidth: 610,
					margin: '0 auto',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {},
			},
		},
		MuiDialog: {
			styleOverrides: {
				container: {
					maxWidth: 610,
					margin: '0 auto',
				},
			},
		},
		MuiModal: {
			styleOverrides: {
				root: {},
			},
		},
	},
});
export default GlobalTheme;
