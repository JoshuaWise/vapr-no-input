'use strict';

/*
	This plugin will respond with 413 to any requests that contain a body.
 */

module.exports = () => (req) => {
	const length = req.headers.get('content-length');
	if (length !== undefined) {
		if (length === '0') return;
		return 413;
	}
	const river = req.read();
	river.pump(throw413);
	return river.catch(conditionalCatch);
};

const conditionalCatch = (err) => {
	// We only want to catch aborted requests.
	if (typeof err === 'number' || err instanceof TypeError) return err;
};

const throw413 = () => { throw 413; };
