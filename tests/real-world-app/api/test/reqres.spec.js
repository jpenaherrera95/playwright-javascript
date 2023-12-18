// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('This is a API test', () => {
    test('GET method', async ({ request }) => {
        const apiContext = await request.newContext({
            // All requests we send go to this API endpoint.
            baseURL: 'https://reqres.in',
            extraHTTPHeaders: {
                // We set this header per GitHub guidelines.
                'Accept': 'application/vnd.github.v3+json',
                // Add authorization token to all requests.
                // Assuming personal access token available in the environment.
                //'Authorization': `token ${process.env.API_TOKEN}`,
            },
        });
        const response = await apiContext.get('/api/users?page=2');
        expect(response.ok()).toBeTruthy();
    })
})
