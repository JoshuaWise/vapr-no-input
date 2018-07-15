'use strict';

/*
	This plugin will respond with 413 to any request that contains a body.
 */

module.exports = () => (req) => {
	const length = req.headers.get('content-length');
	if (length !== undefined) {
		if (length === '0') return;
		return 413;
	}
	const river = req.read();
	river.pump(throw413);
	return river.then();
};

const throw413 = () => { throw 413; };
