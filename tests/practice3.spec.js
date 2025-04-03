const { test, expect } = require('@playwright/test');
// const { default: test } = require('node:test');
const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://example.com');
    await browser.close();
})();


// test.use({viewport: { width: 1280, height: 720 }});


const fs = require('fs');
const path = require('path');
// fs.wrtieeFileSync('test.txt', JSON.stringify({ name: 'John Doe' }, null, 2), 'utf-8');
