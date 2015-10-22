'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'About no Icon',

    contactUrl: 'mailto:support@example.com',

    facebookUrl: 'https://www.facebook.com/Telerik',

    twitterUrl: 'https://twitter.com/telerik',

    events: {
        openUrl: 'openUrl'
    },

    onContactTap: function() {
        this.notify({
            eventName: this.events.openUrl,
            url: this.get('contactUrl')
        });
    },

    onFacebookTap: function() {
        this.notify({
            eventName: this.events.openUrl,
            url: this.get('facebookUrl')
        });
    },

    onTwitterTap: function() {
        this.notify({
            eventName: this.events.openUrl,
            url: this.get('twitterUrl')
        });
    },

    // additional properties

});

// START_CUSTOM_CODE_aboutView
// END_CUSTOM_CODE_aboutView
module.exports = ViewModel;