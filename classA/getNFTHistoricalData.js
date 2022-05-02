const { request } = require('../utils');

module.exports = (chain_id, address, query = {}) => {
	const api = `/${chain_id}/nft_market/collection/${address}/`;

	return request(api, query);
};
