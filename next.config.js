const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'nikola',
				mongodb_password: 'starwars93',
				mongodb_clustername: 'cluster0',
				mongodb_dbname: 'my-site-dev',
			},
		};
	}

	return {
		env: {
			mongodb_username: 'nikola',
			mongodb_password: 'starwars93',
			mongodb_clustername: 'cluster0',
			mongodb_dbname: 'my-site',
		},
	};
};
