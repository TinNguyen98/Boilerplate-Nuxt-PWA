const bootstrap = require('bootstrap');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

const plugins = [];
plugins.push(bootstrap);

module.exports = {plugins};
