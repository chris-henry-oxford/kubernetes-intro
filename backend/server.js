const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Chris Henry", "location": "Oxford"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2009", "yearTo": "2019", "place": "Oxford Computer Consultants", "comment": "Tech Lead"}, {"yearFrom": "2001", "yearTo": "2008", "place": "Oxford Computer Consultants", "comment": "Developer"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "1997", "yearTo": "2001", "place": "Oxford Earth Sciences", "comment": "Earthquakes"}, {"yearFrom": "1993", "yearTo": "1997", "place": "Cambridge", "comment": "Physics"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
