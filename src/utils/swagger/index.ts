import components from './Components'
import schemas from './Schemas'
import paths from './Paths'

export default {
    openapi: '3.0.0',
    info: {
        title: 'Web Scraper - Test',
        description: 'Documentation for the Web Scraper - Test API',
        version: '1.0.0',
    },
    basePath: '/',
    schemes    : [ 'http', 'https' ],
    produces   : [
		"application/json"
	],
    servers: [{
        url: '/api',
        description: 'Main Server'
    }],
    paths,
    schemas,
    components
}