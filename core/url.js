var urllib = require('urllib');
var htmlparser = require("htmlparser2");

//ClassesArray

var listClass = function() {

    var defer = require('q').defer();

    return {
        parserUrl: function(url, fn) {
            var parser,
                classes = [];

            if (!url)
                return false;

            parser = new htmlparser.Parser({
                onopentag: function(name, attribs) {
                    if (attribs.class) {
                        classes.push(attribs.class);
                    }
                },
                onend: function() {
                    var uniqueClass = [],
                        items,
                        i = 0;

                    items = classes;

                    for (i; i < classes.length; i++) {
                        var clsArray,
                            splitClass,
                            b = 0;

                        splitClass = classes[i].split(' ');

                        if (splitClass.length <= 1) {
                            if (uniqueClass.indexOf(classes[i]) === -1) {
                                uniqueClass.push(classes[i]);
                            }
                            
                        } else {
                            for (b; b < splitClass.length; b++) {
                                if (uniqueClass.indexOf(splitClass[b]) === -1) {
                                    uniqueClass.push(splitClass[b]);
                                }
                            }
                        }
                    }

                    defer.resolve(uniqueClass);

                    if (typeof fn === 'function') {
                        fn(defer.promise);
                    }
                },
                onerror: function(err) {
                    defer.reject(err);
                }
            }, {
                decodeEntities: true
            });

            urllib.request(url, {
                dataType: 'text'
            }, function(err, data, res) {
                if (err)
                    throw err;

                parser.write(data);

                parser.end();
            });
        }
    }
};

module.exports = listClass();
