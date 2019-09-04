var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {

    '@tags': ['testZemoga'],

    'Pass': function(client) {
        client
            .url('https://www.uefa.com/uefachampionsleague/')
            .waitForElementVisible('body', 2000)
            .waitForElementVisible('.cc_btn.cc_btn_accept_all', 20000)
            .click('.cc_btn.cc_btn_accept_all')
            .click('.favourite_club > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span')
            .click('.navbar-lv2-nav.js-nav li:nth-child(6)')
            .waitForElementPresent('.box-content.clearfix .teams-overview_group:nth-child(1)' , 20000)
            .assert.title('Clubs - UEFA Champions League - UEFA.com');
    },



    afterEach: function(client, done) {
        client.customSauceEnd();

        setTimeout(function() {
            done();
        }, 1000);

    }

};