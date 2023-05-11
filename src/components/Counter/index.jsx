import React from 'react';
import { useTheme } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import useStyles from './styles';

export default function Count({ count, setCount }) {
	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};
	const increment = () => {
		setCount(count + 1);
	};

	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.counterSegment}>
			<button className={classes.decrementBtn} onClick={decrement}>
				<FontAwesomeIcon icon={faMinus} />
				<span className={classes.mobileNone}>{'DECREMENT'}</span>
			</button>
			<h2>Counter: {count}</h2>
			<button className={classes.incrementBtn} onClick={increment}>
				<FontAwesomeIcon icon={faPlus} />
				<span className={classes.mobileNone}>{'INCREMENT'}</span>
			</button>
		</div>
	);
}
