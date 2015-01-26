//Modules
var classes = require('./core/url');
var BEM = require("./core/BEM");


(function() {
    'use strict';

    classes.parserUrl('http://devmarco.github.io', function(myClasses) {
        myClasses.then(function(cls) {
            var classes = BEM.filter(cls);
        });
    });
}());
