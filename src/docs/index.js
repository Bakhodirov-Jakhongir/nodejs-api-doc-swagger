const basicInfo = require('./basicInfo');
const servers = require('./server');
const tags = require('./tags');
const components = require('./components');
const todos = require('./todos');

module.exports = {
    ...basicInfo,
    ...servers,
    ...tags,
    ...components,
    ...todos
}