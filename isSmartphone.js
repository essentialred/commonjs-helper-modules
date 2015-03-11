'use strict';

var Modernizr = window.Modernizr;

module.exports = isSmartphone();

function isSmartphone() {
    var deviceWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;

    return deviceWidth < 768 && Modernizr.touch;
}