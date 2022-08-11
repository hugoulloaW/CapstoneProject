# CapstoneProject
# Author: Hugo Ulloa
Capstone Project for the QA Automation Bootcamp of Sauce Demo Page and PokeAPI, made with testcafe and Postman, written in JavaScript.

## Table of Contents
-[Introduction](#introduction)
    -[Project Structure](#project-structure)
    -[Project Stack](#project-Stack)
    -[Dependencies](#dependencies)
-[Local instalation](#local-instalation)
    -[Prerequisites](#prerequisites)
    -[Project Setup](#project-setup)
-[Tests](#tests)
    -[API Testing](#API-testing)
        -[GET test](#get-test)
        -[Backend test](#backend-test)
    -[Front-end Testing](#frontend-testing)
        -[Login test](#login-test)
        -[Navigation test](#navigation-test)
        -[Product test](#product-test)
        -[Smoke test](#smoke-test)
    -[Scripts](#scripts)
    -[Linting](#linting)


## Introduction
This project is made for the final project of the QA Automation Bootcamp, where we should set an automation framework that includes testing for their Front End and API and CI/CD pipeline.
The framework selected in this project is testcafe, for the Front End. And Postman for the API, both written in JavaScript. And GitHub Actions for the CI/CD. 

### Project Structure
```

|-- API
|   |-- POKEAPI ENV.postman_environment.json
|   |-- PokeAPI.json

|-- FRONT
|   |-- data
|   |   |-- Constants.js
|   |-- pages
|   |   |-- CartPage.js
|   |   |-- CheckoutComplete.js
|   |   |-- CheckoutInfoPage.js
|   |   |-- CheckoutPage.js
|   |   |-- HomePage.js
|   |   |-- ItemPage.js
|   |   |-- LoginPage.js
|   |   `-- workspace.code-workspace
|   |-- tests_results
|   |   |-- resultados.html
|   |   |-- results.html
|   |-- tests
|   |   |-- login-test-pom.js
|   |   |-- navigation-pom.js
|   |   |-- product-test-pom.js
|   |   |-- smoke-test.js
|-- .eslintrc.js   
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- README.md

```
### Project Stack
- Node
- Testcafe
- JavaScript
- Newman

### Dependencies
- dotenv
- eslint
- testcafe reporter html
- newman


[ back to top ](#table-of-contents)

## Local instalation
These are the instructions to install locally the project. 

### Prerequisites
1. Node.js (latest)
2. Web browser (of your choice: Chrome, Firefox, Safari)
3. Source-code editor


### Project Setup
1. Clone *capstoneProj* repository
2. Go to the repository folder 
```
cd capstoneProj
```
3. Create a *.env* file with the following variables:
```
URL=https://www.saucedemo.com/
USERNAME=standard_user
PASSWORD=secret_sauce
BADUSERNAME=locked_out_user
BADPASSWORD=scrt_sauce
FIRSTNAME=John
LASTNAME=Doe
ZIPCODE=90065
```
4. Run:
```
npm install
npm install -g testcafe
npm install -g newman 

```
5. Newman Setup
 Go to the API folder and onto the json file.
```
API/PokeAPI.postman_collection.json -e API/POKEAPI-ENV.postman_enviroment.js

```
[ back to top ](#table-of-contents)


## Tests
S

## API Testing
### GET test
### Backend test
## Front-end Testing
### Login test
### Navigation test
### Product test
### Smoke test 
## Scripts
## Linting




### Scripts
| Script Name|Description|
|----------|:-------------|
| npm run test | Run all test from the directory ./tests/
| test-login | Runs all tests from *Login feature tests* fixture on a Chrome instance.|
| test-navigation | Runs all tests from *Navigation feature tests* fixture on a Chrome instance.|
|test-products | Runs all tests from *Products feature tests* fixture on a Chrome instance.|
|test-smoke | Run all smoke tests on a Chrome instance.|   
|test-backend | Run Api tests using Newman and Postman|  
|test-backup | Runs all tests on a Chrome instance generating an HTML Test Report.|   


