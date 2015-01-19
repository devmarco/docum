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
        setChilds: function(index, master, child) {
            // console.log('ITEM', master, child);

            // classObject[index].childs.push({
            //     class: child,
            //     childs: []
            // });
        },
        setMasters: function(childs) {
            var _self = this;

            if (!_.contains(classMasters, childs[0])) {

                classMasters.push(childs[0]);

                var index = classObject.push({
                    class: childs[0],
                    childs: []
                });

                switch (childs.length) {
                    case 1:
                        break;
                    case 2:
                    	var i = 1;

                        for (i in classObject[index -1].childs) {
                            if (classObject[index -1].childs[0].class !== childs[i])
                                classObject[index -1].childs.push({
                                    class: childs[1],
                                    childs: []
                                });
                        }

                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                }

                

            } else {
                //console.log("TRUE", childs);
            }

            console.log(classObject[0].childs[1]);
            
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
