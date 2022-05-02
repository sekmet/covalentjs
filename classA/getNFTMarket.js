const { request } = require('../utils');

module.exports = (chain_id, query = {}) => {
	const api = `/${chain_id}/nft_market/`;

	return request(api, query);
};
