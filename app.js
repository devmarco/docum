//Modules
var classes = require('./core/url');
var BEM = require("./core/BEM");


(function() {
    'use strict';

    classes.parserUrl('http://devmarco.github.io', function(myClasses) {
        myClasses.then(function(cls) {
            var classes = BEM.filter(cls);
            console.log(classes);
        });
    });
}());




//Mock example

// .wrapper__rows {}
// .wrapper__rows__item {}
//.wrapper__rows__item__teste

// .wrapper__rows__item2 {}

// .wrapper__rows__item3 {}