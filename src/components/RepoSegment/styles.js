import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
	repoSegment: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.gutter.large,
		boxSizing: 'border-box',
		width: '100%',
		padding: `${theme.gutter.largest} ${theme.gutter.regular}`,
		backgroundColor: theme.pallet.light,
		minHeight: '300px',
	},

	'@keyframes spin': {
		from: {
			transform: 'rotate(0deg)',
		},
		to: {
			transform: 'rotate(360deg)',
		},
	},
	loader: {
		border: `5px solid ${theme.pallet.opacity}`,
		borderTop: `5px solid ${theme.pallet.purple}`,
		boxSizing: 'border-box',
		borderRadius: theme.br.full,
		width: '32px',
		height: '32px',
		animationName: '$spin',
		animationDuration: '1000ms',
		animationTimingFunction: 'linear',
		animationDelay: '0s',
		animationIterationCount: 'infinite',
		animationDirection: 'normal',
		animationFillMode: 'none',
		animationPlayState: 'running',
	},
}));

export default useStyles;
