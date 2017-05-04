'use strict'

var cat = {
  name: {first: ' Fluffy', last: ' LaBeouf'},
  color: 'White'
}

Object.defineProperty(cat, 'fullName',
  {
    get: function(){
        return this.name.first + ' ' + this.name.last;
    },
    set: function(value){
        var nameParts= value.split(' ');
        this.name.first = nameParts[0];
        this.name.first = nameParts[1];
    }
  });

cat.fullName= ' Muffin Top';

alert(cat.name.first);
