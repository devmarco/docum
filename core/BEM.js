var _ = require('lodash');

function BEM() {
    return {
        filter: function(cls) {
            var _self = this,
                bemObject;

            _self.filterMasters(cls);

            return true;
        },
        filterMasters: function(cls) {
            var _self = this,
                bemObject = [],
                blocks = [];

            for (i in cls) {
                //Split the class to pick up the children
                var childs = _self.getChilds(cls, cls[i].split('__'));

                if (blocks.indexOf(childs[0].class) === -1) {
                    blocks.push(childs[0].class);

                    bemObject.push({
                        block: childs[0].class,
                        expected: childs[0].expected,
                        content: []
                    });

                    if (childs.length > 1)
                        _self.setBlocks(bemObject, childs, blocks);

                } else {
                    if (childs.length > 1)
                        _self.setBlocks(bemObject, childs, blocks);
                }
            }

            return bemObject;
        },
        setBlocks: function(obj, childs, blocks) {
            var _self = this,
                i = 0;

            for (i; i < obj.length; i++) {

                console.log(obj[i].expected, '-----', childs[0].class, childs);

                //['wrapper', 'wrapper__rows', 'wrapper__rows__teste']

                if (obj[i].expected === childs[0].class) {
                    if (obj[i].content.length === 0) {
                        obj[i].content.push({
                            block: childs[1].class,
                            expected: childs[1].expected,
                            content: []
                        });
                    }

                    switch (childs.length) {
                        case: 2
                        var b = 0;
                        for (b; b < obj[i].content.length; b++) {
                            if (obj[i].content[b].expected !== childs[1].expected) {
                                obj[i].content.push({
                                    block: childs[1].class,
                                    expected: childs[1].expected,
                                    content: []
                                });
                            }
                        }
                        break;
                        case: 3
                        var b = 0;
                        for (b; b < obj[i].content.length; b++) {
                            if (obj[i].content[b].expected !== childs[b+1].expected) {
                                obj[i].content.push({
                                    block: childs[b+1].class,
                                    expected: childs[b+1].expected,
                                    content: []
                                });
                            }
                        }
                        break;
                        case: 4
                        obj[i].content.push({
                            block: childs[1].class,
                            expected: childs[1].expected,
                            content: []
                        });
                        break;
                        case: 5
                        obj[i].content.push({
                            block: childs[1].class,
                            expected: childs[1].expected,
                            content: []
                        });
                        break;
                        case: 6
                        obj[i].content.push({
                            block: childs[1].class,
                            expected: childs[1].expected,
                            content: []
                        });
                        break;
                    }
                }
            }

            // if (childs[0].class) {
            //     for (i; i < childs.length; i++) {
            //         var index = blocks.indexOf(childs[0].class);

            //         if (obj[index].content.length === 0) {

            //             obj[index].content.push({
            //                 block: childs[1].class,
            //                 expected: childs[1].expected,
            //                 content: []
            //             });

            //             console.log(obj);
            //         } else {

            //         }
            //     }
            // }
        },
        setElements: function(obj, value) {
            // if (typeof obj !== 'object' || typeof value !== 'object')
            //     return false;
        },
        setModifiers: function() {

        },
        getChilds: function(cls, splitClass) {
            var slug = '',
                childs = [],
                splitClassLenght,
                i = 0

            splitClassLenght = (splitClass.length);

            for (i; i < splitClassLenght; i++) {
                if (i === 0) {
                    slug += splitClass[i];
                } else if (i < splitClassLenght) {
                    slug += '__' + splitClass[i];
                } else {
                    slug += splitClass[i];
                }

                childs.push({
                    class: (cls.indexOf(slug) === -1) ? null : slug,
                    expected: slug
                });
            }

            return childs;
        }
    }
}



module.exports = BEM();





var teste = {
    block: 'null',
    expected: 'nav',
    content: {
        block: 'head',
        mods: [{
            size: 'big'
        }, {
            type: 'buttons'
        }],
        content: [{
            block: 'menu',
            content: '…'
        }, {
            elem: 'column',
            mods: ['green', 'black'],
            content: {
                block: 'logo'
            }
        }, {
            elem: 'column',
            content: [{
                block: 'search',
                content: [{
                    elem: 'input'
                }, {
                    elem: 'button',
                    content: 'Search'
                }]
            }]
        }, {
            elem: 'column',
            content: {
                block: 'auth',
                content: '…'
            }
        }]
    }
}
