import { test, expect, request } from '@playwright/test';

test('API testing example', async () => {
  const apiContext = await request.newContext(); // Create a request context

  // Perform a GET request
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.ok()).toBeTruthy(); // Check if the response status is 200
  const responseBody = await response.json(); // Parse the JSON response
  console.log(responseBody);

  // Perform a POST request
  const postResponse = await apiContext.post('https://jsonplaceholder.typicode.com/posts', {
    data: { title: 'foo', body: 'bar', userId: 1 },
  });
  expect(postResponse.ok()).toBeTruthy();
  const postBody = await postResponse.json();
  console.log(postBody);
});

/*
const {test , expect} = require('@playwright/test');


const REPO = 'test-repo-1';
const USER = 'github-username';

test('should create a bug report', async ({ request }) => {
  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: '[Bug] report 1',
      body: 'Bug description',
    }
  });
  expect(newIssue.ok()).toBeTruthy();

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
  expect(issues.ok()).toBeTruthy();
  expect(await issues.json()).toContainEqual(expect.objectContaining({
    title: '[Bug] report 1',
    body: 'Bug description'
  }));
});

test('should create a feature request', async ({ request }) => {
  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: '[Feature] request 1',
      body: 'Feature description',
    }
  });
  expect(newIssue.ok()).toBeTruthy();

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
  expect(issues.ok()).toBeTruthy();
  expect(await issues.json()).toContainEqual(expect.objectContaining({
    title: '[Feature] request 1',
    body: 'Feature description'
  }));
});

*/

// import { defineConfig } from "@playwright/test";

// export default defineConfig({
//   use: {
//     //All requests we send go to this API endpoints
//     baseURL: "https://api.github.com",

//     extraHTTPHeaders: {
//       //we setup this header as per GitHub API documentation
//       Accept: "application/vnd.github.v3+json",
//       // Add authorization token to all requests.
//       // Assuming personal access token available in the environment.
//       Authorization: `token ${process.env.API_TOKEN}`,
//     },
//   },
// }); // This is the configuration file for Playwright tests. It can be used to set global settings for all tests, such as timeouts, retries, and more.

