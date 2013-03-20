"use strict";

var fs      = require('fs');
var path    = require('path');
var resolve = path.resolve;


module.exports = function eli_plugin_rss(eli) {
    var config = require(resolve('config'))['rss'];
    
    eli.on('publish-complete', eliOnPublishComplete);

    function eliOnPublishComplete() {
        console.log('starting to build rss feed');
    }
};
