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




//Mock example

// .wrapper__rows {}
// .wrapper__rows__item {}
//.wrapper__rows__item__teste

// .wrapper__rows__item2 {}

// .wrapper__rows__item3 {}