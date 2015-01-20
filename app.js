//Modules
var classes = require('./core/url');
var BEM = require("./core/BEM");


(function() {
    'use strict';

    classes.parserUrl('http://www.uai.com.br', function(myClasses) {
        myClasses.then(function(cls) {
            var classes = BEM.filter(cls);
        });
    });
}());
