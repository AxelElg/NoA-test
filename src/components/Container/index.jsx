import React from 'react';
import { useTheme } from 'react-jss';

import useStyles from './styles';

export default function Container({ children }) {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.outerContainer}>
			<div className={classes.innerContainer}>{children}</div>
		</div>
	);
}
