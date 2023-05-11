import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
	outerContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		padding: `${theme.gutter.largest} 0`,
	},

	innerContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '420px',
		maxWidth: '100%',
		flexDirection: 'column',
		boxShadow: `0 ${theme.gutter.small} ${theme.gutter.regular} ${theme.pallet.opacity}`,
		borderRadius: theme.br.regular,
		overflow: 'hidden',
	},
}));

export default useStyles;
