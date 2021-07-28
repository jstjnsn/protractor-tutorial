# protractor-tutorial

I wanted to get to know the current way of working with Protractor, Angular and Typescript as frontend testing environment. Here are the steps I took:

1. Install tools: `npm install -g typescript @angular/cli protractor webdriver-manager`
2. Update and start webdriver: `webdriver-manager update` and `webdriver-manager start`
3. Create and start angular project: `ng new angular-base` and `cd angular-base && ng serve`
4. Write protractor test script: `angular-base.spec.js`
5. Set up protractor config and run tests: `protractor protractor.config.js`
