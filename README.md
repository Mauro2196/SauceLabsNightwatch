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
    $ export SAUCE_USERNAME="zemoga2"
	$ export SAUCE_ACCESS_KEY="54d2c40f-2f2d-4bfe-8121-b7e1c4a9dcd9"
    ```
3. Project Dependencies
	* Install Node modules
	```
	$ npm install
	```

### Running Tests

./node_modules/.bin/nightwatch -t tests/SampleWithSauceLabs.js -e android_s7_emulator

