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
        -[Backend test](#backend-test)
    -[Front-end Testing](#frontend-testing)
        -[Login test](#login-test)
        -[Navigation test](#navigation-test)
        -[Product test](#product-test)
        -[Smoke test](#smoke-test)
    -[Linting](#linting)
    -[Scripts](#scripts)
    


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
Using diverse frameworks, API and Front end testing where written, according to the instructions provided from Academy. 

## API Testing
The collection where build with Postman, to later make use of Newman for automation. 


### Backend test
For this tests, we interact with the {Pokemon API}(https://pokeapi.co/) choosing the following endpoints from the list of task:
1. Favorite Pokemon
2. Pick the first move
3. Search all information from that move and validate "Learned_by_pokemon"
4. Use the move as a validation.
5. Evaluate HTTP status code accordingly
6. Validate response time under 700ms

3 GET request where made, the first one to fully obtain the whole "Pokedex" (full list of pokemons) where we can take the favorite pokemon as an enviroment variable, then we obtain the full information of that pokemon, selecting the first move and making it an enviroment variable, and last the full information of that move, validating that our favorite pokemon can learn that move. 

## Front-end Testing
Using the fundamentals of Page Object Model and applying the best practices of Front End Automation we built these tests in testcafe. 

### Login test
Besides the succesfull login, there are 3 other test scenarios where we need to test unsuccessfull login, without ussername, without password and with a typo in the username and password. This tests should be consider as succesfull when the login page showns the error message. 

### Navigation test
This test is made to corroborate that the navigation between login, products page (home) and cart page is correct, validating the ".title" exists in these pages.

### Product test
Here are two test, the first one allows the user add a product to the cart page. This test is validated with the item being added to the cart. The second test validates that the item selected is the same from the homepage, validating the information of that item. 

### Smoke test 
This test is made to ensure the correct function of the page, validating that you can make a purchase from the saucedemo page. It validates the login, selecting a product from the homepage, then the cart page where you can procede the checkout process, validating the information between pages and the checkout process is complete, closing with the logout process. 

## Linting
In the .yml file, before runing the test, firts runs a lint checkout of the code for the ./FRONT directory, where resides most of the code writen. This process ensures that the code complies with the best practices fromo JavaScript.

### Scripts
| Script Name|Description|
|----------|:-------------|
| npm run lint | Runs a test in the code from the directory ./FRONT/ |
| npm run test | Run all test from the directory ./tests/
| test-login | Runs all tests from *Login feature tests* fixture on a Chrome instance.|
| test-navigation | Runs all tests from *Navigation feature tests* fixture on a Chrome instance.|
|test-products | Runs all tests from *Products feature tests* fixture on a Chrome instance.|
|test-smoke | Run all smoke tests on a Chrome instance.|   
|test-backend | Run Api tests using Newman and Postman|  
|test-backup | Runs all tests on a Chrome instance generating an HTML Test Report.|   


