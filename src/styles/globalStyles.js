import { createUseStyles } from 'react-jss';

const useGlobalStyles = createUseStyles(theme => ({
	'@global': {
		'*': {
			boxSizing: 'border-box',
			fontSize: theme.fs.small,
		},
		'h1, h2, h3, h4, p, a': {
			fontFamily: 'sans-serif',
			lineHeight: '1.2em',
			textAlign: 'center',
			fontSize: theme.fs.regular,
			margin: '0',
			padding: '0',
		},
	},
}));

export default useGlobalStyles;
