const eurekaClient = require('./eureka-client');
const app = require('./app');

const PORT = process.env.PORT || 8083;

app.listen(PORT, () => {
  console.log(`meeting microservice running on http://localhost:${PORT}`);

// Eureka registration
eurekaClient.start((error) => {
  if (error) console.error('Eureka registration failed:', error);
  else console.log('Meeting service registered on Eureka');
});
  console.log(`Swagger UI: http://localhost:${PORT}/swagger-ui`);
});
