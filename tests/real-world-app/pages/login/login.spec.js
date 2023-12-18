// @ts-check
const { test, expect, request } = require('@playwright/test');
const {BasePage} = require('../basePage')

test.describe('This is our test suite', () => {
    test('Login on the application', async ({page}) =>{
        const basePage = new BasePage(page);
        await basePage.goto();
        await expect(page.locator(`#username`)).toBeVisible();
        //await expect(page.getByText('Remember me')).toBeVisible();
    })

    test('GET method', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users?page=2',{
            params: {
                page: 2
            },
            headers: {
                Accept: 'application/json'
            }
        })
       /* const apiContext = await request.newContext({
            // All requests we send go to this API endpoint.
            baseURL: 'https://reqres.in',
            extraHTTPHeaders: {
                // We set this header per GitHub guidelines.
                'Accept': 'application/vnd.github.v3+json',
                // Add authorization token to all requests.
                // Assuming personal access token available in the environment.
                //'Authorization': `token ${process.env.API_TOKEN}`,
            },
        });*/
        //const response = await apiContext.get('/api/users?page=2');
        expect(response.status).toBeTruthy()
    })
})
