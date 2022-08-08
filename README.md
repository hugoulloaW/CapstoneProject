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
EMAIL = a_valid_email@email.com
PASSWORD = a_valid_password
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
2. Modify the following line:
```
"value": "your_own_token",
```

### Scripts
| Script Name|Description|
|----------|:-------------|
| test-login-chrome |Runs all tests from *Login feature tests* fixture on a Chrome instance.|
| test-addTasks-chrome |Runs all tests from *Add new task* fixture on a Chrome instance.|
|test-addProject-chrome|Runs all tests from *Add new project* fixture on a Chrome instance.|
|test-login-headless|Runs all tests from *Login feature tests* fixture in parallel on Chrome and Firefox instances using headless mode.|   
|test-all-chrome|Runs all tests on a Chrome instance.|  
|test-allReport-chrome|Runs all tests on a Chrome instance generating an HTML Test Report.|   
|test-smoke-chrome|Run all smoke tests on a Chrome instance.|  
|eslint| Run Eslint|
|api-newman-tests| Run Api tests using Newman and Postman|

