const environments = {
    development: 'http://localhost:3000',
    staging: 'https://staging.example.com',
    production: 'https://www.example.com',
  };
  
  module.exports = {
    getBaseUrl: (env) => {
      const baseUrl = environments[env];
  
      if (!baseUrl) {
        throw new Error(`Unknown environment: ${env}`);
      }
  
      return baseUrl;
    },
  };
