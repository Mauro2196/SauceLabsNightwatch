var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {

    '@tags': ['testZemoga'],

    'Pass': function(client) {
        client
            .url('https://www.playstation.com/en-us/network/vue/')
            .waitForElementVisible('body', 2000)
            .waitForElementVisible('.video-takeover-hero__content > div > div> div > div > div> div> div > a', 20000)
            .click('.video-takeover-hero__content > div > div> div > div > div> div> div > a')
            .waitForElementVisible('.enterzipcode__input--container>button', 20000)
            .setValue('.enterzipcode__input--container>input', '10001')
            .click('.enterzipcode__input--container>button')
            .waitForElementPresent('.baseplans__plans>div>h3' , 20000)
    },



    afterEach: function(client, done) {
        client.customSauceEnd();

        setTimeout(function() {
            done();
        }, 1000);

    }

};