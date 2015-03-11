'use strict';

var $ = require('jquery');

module.exports = function(cb, timeout) {
    return new ResizeDebouncer(cb, timeout);
};

function ResizeDebouncer(cb, timeout) {
    var _this = this;

    this.$win = $(window);
    this.resizeTicker = 0;
    this.cb = cb;
    this.timeout = timeout || 500;

    this.resizeDebounce = function(ticker) {
        // debounce until resize is over
        setTimeout(function(){
            if (ticker == _this.resizeTicker) {
                _this.cb();
            }
        }, this.timeout);
    };

    this.$win.on('resize', function(e){
        _this.resizeTicker++;
        _this.resizeDebounce(_this.resizeTicker);
    });
}