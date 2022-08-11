# CapstoneProject
# Author: Hugo Ulloa
Capstone Project  QA Automation Bootcamp.

### Pre-requisites
1. Node.js (latest)
2. Web browser (of your choice: Chrome, Firefox, Safari)

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
```


### Project Stack
- Node
- Testcafe
- JavaScript
- Newman

### Dependencies
- dotenv
- randomstring
- eslint
- eslint plugin testcafe
- testcafe reporter html
- newman

### Newman Setup
1. Go to the api folder and onto the json file.
```
api/capstoneEnviroment.postman_environment.json

```

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


