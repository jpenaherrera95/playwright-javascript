const environments = {
  development: {
    baseUrl: 'http://localhost:3000',
  },
  staging: 'https://staging.example.com',
  production: 'https://www.example.com',
};

const selectedEnvironment = process.env.NODE_ENV || 'development';
module.exports = { ...environments[selectedEnvironment]};
