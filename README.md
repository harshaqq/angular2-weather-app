[![Build Status](https://travis-ci.org/sriharsha91/angular2-weather-app.svg?branch=master)](https://travis-ci.org/sriharsha91/angular2-weather-app)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1afbe59b899e7f570e66/test_coverage)](https://codeclimate.com/github/sriharsha91/angular2-weather-app/test_coverage)
<a href="https://codeclimate.com/github/sriharsha91/angular2-weather-app/maintainability"><img src="https://api.codeclimate.com/v1/badges/1afbe59b899e7f570e66/maintainability" /></a>


## Features for initial version
----------------------------
This is the simple forecast app which completely modular, The app is developed using angular2 with below points in mind
	
* The app should display forecasted data for 5 days, not focused on current data
* It should simple not too complicated
* Less focused on ui more focused on javascript since it can be changed at any tiem
* DOM tree should match with component tree 			
	
## Live Demo
---------
[Demo](http://sriharsha91.github.io/angular2-weather-app)
		
## What is missing
---------------

* End user centric (It is not developed for end user friendly)
* Not much css work is done for current version
* E2E Tests (It doesn't have robust e2e tests)
* Advanced state management (It is not using any of the architecture pattern like flux or redux)
* Best practices for documenting the typescript code 
	
## Hosting

It is hosted on github pages [Link](https://pages.github.com/)

## Dependencies
-------------
*NodeJS        8.4.0
*npm           5.7.1
*@angular/cli  1.6.5
	
## Technology
---------
*Angular       version-5
*Bootstrap     version-4	

## Running
--------
Run `ng serve` to start development server, you can access using [Link](http://localhost:4200)

## Building
---------
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
--------------------
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running e2e tests
-------------------
Note: Currently e2e test cases are not written for this app
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploying to github pages
1. Generate github token [Link](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
2. Set GH_TOKEN environment variable with value as generated token
3. Change repository url in package.json if required
4. Run `npm deploy`
5. It will deploy to gh-pages branch
