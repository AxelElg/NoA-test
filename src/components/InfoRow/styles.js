import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
	infoRow: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.gutter.small,
		width: '300px',
		maxWidth: '100%',
	},

	infoRowHead: {
		fontSize: theme.fs.large,
		color: theme.pallet.pink,
	},

	infoRowParagraph: {
		color: theme.pallet.paragraph,
	},
}));

export default useStyles;
