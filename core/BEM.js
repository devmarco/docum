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
				var childs = cls[mClass].split('__');

				if (!_.contains(classMasters, childs[0])) {

					classMasters.push(childs[0]);

					var index = classObject.push({
						class: childs[0],
						childs: []
					});

					if (childs.length > 1) 
						_self.setChilds(childs);
					

				} else {
					if (childs.length > 1) 
						_self.setChilds(childs);
					
				}
			}

			return classObject;
		},
		setChilds: function(childs) {

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
