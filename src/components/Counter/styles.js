import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
	counterSegment: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		padding: theme.gutter.regular,
		boxSizing: 'border-box',
	},

	btn: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.gutter.small,
		width: '130px',
		height: '40px',
		borderRadius: theme.br.full,
		boxShadow: `0 ${theme.gutter.tiny} ${theme.gutter.small} ${theme.pallet.opacity}`,
		border: 'none',
		transition: '75ms',
		'&:active': {
			transform: 'scale(0.97)',
			boxShadow: `0 ${theme.gutter.tinier} ${theme.gutter.tiny} ${theme.pallet.opacity}`,
		},
	},
	decrementBtn: {
		extend: 'btn',
		backgroundColor: theme.pallet.white,
		color: theme.pallet.black,
		border: `1px solid ${theme.pallet.black}`,
		'&:hover': {
			backgroundColor: theme.pallet.black,
			color: theme.pallet.white,
		},
	},

	incrementBtn: {
		extend: 'btn',
		backgroundColor: theme.pallet.pink,
		color: theme.pallet.white,
		'&:hover': {
			backgroundColor: theme.pallet.purple,
		},
	},

	mobileNone: {
		display: 'inline',
	},

	'@media (max-width: 400px)': {
		counterSegment: {
			justifyContent: 'space-around',
		},

		incrementBtn: {
			width: '40px',
			minWidth: '40px',
		},
		decrementBtn: {
			width: '40px',
			minWidth: '40px',
		},

		mobileNone: {
			display: 'none',
		},
	},
}));

export default useStyles;
