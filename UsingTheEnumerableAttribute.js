'use strict';

var cat = {
  name: {first: ' Fluffy', last: ' LaBeouf'},
  color: 'White'
}


//for ... in
for (var propertyName in cat){
  alert(propertyName + ':'  + cat[propertyName])
}

Object.defineProperty(cat, 'name', {enumerable:true});

alert(Object.keys(cat));

alert(JSON.stringify(cat))
