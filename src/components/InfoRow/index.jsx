import React from 'react';
import { useTheme } from 'react-jss';

import useStyles from './styles';

export default function InfoRow({ header, paragraph }) {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.infoRow}>
			<h2 className={classes.infoRowHead}>{header}</h2>
			<p className={classes.infoRowParagraph}>{paragraph}</p>
		</div>
	);
}
