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

                //Get the master blocks
                if (blocks.indexOf(childs[0]) === -1) {
                    blocks.push(childs[0]);

                    bemObject.push({
                        block: childs[0],
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

            for (i; i < childs.length; i++) {
            	var index = blocks.indexOf(childs[0]);

            	if (obj[index].content.length === 0) {
            		obj[index].content.push({
            			block: childs[1],
            			content: []
            		});
            	} else {
            		if (obj[index].content.block)
            	}
            }
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
                i = 0;

            for (i; i < splitClass.length; i++) {
                var splitClassLenght = (splitClass.length);

                if (i === 0) {
                    slug += splitClass[i];
                } else if (i < splitClassLenght) {
                    slug += '__' + splitClass[i];
                } else {
                    slug += splitClass[i];
                }

                if (cls.indexOf(splitClass[i]) === -1) {
                	childs.push({
                		class: null,
                		expected: slug
                	});
                } else {
                	childs.push({
                		class: slug,
                		expected: slug
                	});
                }
            }

            return childs;
        }
    }
}



module.exports = BEM();





var teste = {
    block: 'page',
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
