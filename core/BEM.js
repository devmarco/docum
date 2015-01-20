var _ = require('lodash');

function BEM() {
    var mClass = 0,
        cClass = 1,
        classMasters = [],
        classObject = [];

    return {
        filter: function(cls) {
            var _self = this;

            for (mClass; mClass < cls.length; mClass++) {
                var masters,
                    childs;

                childs = cls[mClass].split('__');
                masters = _self.setMasters(childs);
            }

            return classObject;
        },
        setChilds: function(childs, index) {
            var slug = '',
                i = 0;

            for (i; i < childs.length; i++) {
                i === (childs.length - 1) ? slug += childs[i] : slug += childs[i] + '__';
            }

            for (i in classObject) {
                if (classObject[i].class === childs[0] && childs.length === 2) {
                    classObject[index - 1].childs.push({
                        class: slug,
                        childs: []
                    });
                }
            }
        },
        setMasters: function(childs) {
            var index,
                _self = this;

            //Define the master classes
            if (!_.contains(classMasters, childs[0])) {

                classMasters.push(childs[0]);

                index = classObject.push({
                    class: childs[0],
                    childs: []
                });

                if (childs.length > 1)
                    _self.setChilds(childs, index);

            } else {
                if (childs.length > 1)
                    _self.setChilds(childs, index);
            };

            return classObject;
        }
    }
}

module.exports = BEM();


// var scary = {
// 	master: '.wrapper',
// 	childs: [
// 		{
// 			class: 'wrapper__rows',
// 			childs: []
// 		},
// 		{
// 			class: 'wrapper__teste',
// 			childs: []
// 		}
// 	]
// }
