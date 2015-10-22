var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    url: '//testtap.telerik.com/bs-api/v1/',

    apiKey: 'tonEeUlPRjudaLXN',
    scheme: 'https'
});

// START_CUSTOM_CODE_generators08Backend
// END_CUSTOM_CODE_generators08Backend
module.exports = provider;