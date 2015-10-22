'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),

    service = require('./dataListView-service'),
    // additional requires

    viewModel = require('./dataListView-view-model');

function onListViewItemTap(args) {
    var itemData = viewModel.get("listItems")[args.index];

    helpers.navigate({
        moduleName: "components/dataListView/itemDetails/itemDetails",
        context: itemData.details
    });
}
exports.onListViewItemTap = onListViewItemTap;

// additional functions

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;

    service.getAllRecords()
        .then(function(result) {
            var itemsList = [];

            result.forEach(function(item) {
                itemsList.push({

                    icon: '~/images/icons/globe.png',

                    image: item.Picture,

                    header: item.Text,

                    details: {

                        image: item.Picture,

                    }

                });
            });

            viewModel.set('listItems', itemsList);
        });
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
}

// START_CUSTOM_CODE_dataListView
// END_CUSTOM_CODE_dataListView
exports.pageLoaded = pageLoaded;