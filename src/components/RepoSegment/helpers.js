import axios from 'axios';

const APIEndPoint = 'https://api.github.com/repos/';

const repoNames = [
	'eslint/eslint',
	'oakwood/front-end-questions',
	'babel/babel',
	'webpack/webpack',
	'storybooks/storybook',
	'facebook/react',
	'reactjs/redux',
	'expressjs/express',
];

const setNewRepoInfo = (i, func) => {
	axios
		.get(APIEndPoint + repoNames[i])
		.then(res => {
			const { status, statusText, data } = res;
			const { full_name, description, stargazers_count } = data;
			func({
				status,
				statusText,
				full_name,
				description,
				stargazers_count,
			});
		})
		.catch(err => {
			const { status, statusText } = err.response;
			func({
				status,
				statusText,
			});
		});
};

export default setNewRepoInfo;
