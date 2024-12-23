const methodOverride = require('./methodOverride');
const bodyParser = require('./bodyParser');
const staticFiles = require('./staticFiles');

module.exports = (app) => {
  app.use(methodOverride); 
  bodyParser(app); 
  staticFiles(app); 
};
