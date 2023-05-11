import React, { useEffect, useState } from 'react';
import { useTheme } from 'react-jss';

import InfoRow from '../InfoRow';
import setNewRepoInfo from './helpers';
import useStyles from './styles';

export default function RepoSegment({ count }) {
	const [repo, setRepo] = useState({});

	const theme = useTheme();
	const classes = useStyles({ theme });

	useEffect(() => {
		setRepo({});
		setNewRepoInfo(count, setRepo);
	}, [count]);

	let componentContent = <div className={classes.loader}></div>;

	if (repo.status == 200) {
		componentContent = (
			<>
				<InfoRow header={'Full Name:'} paragraph={repo.full_name} />
				<InfoRow header={'Description:'} paragraph={repo.description} />
				<InfoRow header={'Amount of Stars:'} paragraph={repo.stargazers_count} />
			</>
		);
	} else if (repo.status) {
		componentContent = <InfoRow header={repo.status} paragraph={repo.statusText} />;
	}

	return <div className={classes.repoSegment}>{componentContent}</div>;
}
