### Environment Setup

1. Global Dependencies
    * Install [Node.js](https://nodejs.org/en/)
    * Or Install Node.js with [Homebrew](http://brew.sh/)
    ```
    $ brew install node
    ```
2. Sauce Credentials
    * In the terminal export your Sauce Labs Credentials as environmental variables:
    ```
    create a file .env and add the  keys SAUCE_USERNAME & SAUCE_ACCESS_KEY
    ```
3. Project Dependencies
	* Install Node modules
	```
	$ npm install
	```

### Running Tests

./node_modules/.bin/nightwatch -t tests/SampleWithSauceLabs.js -e android_s7_emulator

