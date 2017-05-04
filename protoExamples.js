'use strict';

function Cat(name,color){
  this.name= name;
  this.color=color;
}
Cat.prototype.age=3; //all cats have the same prototype's age property equal 3
var fluffy = new Cat('fluffy', 'white')

Cat.prototype;
fluffy.__proto__; //the same as Cat.prototype

var muffin = new Cat('Muffin', 'Brown')
muffin.__proto__; //points to the same prototype

alert(fluffy.age); //returns 3
fluffy.age = 5;
alert(fluffy.age); //returns 5 because now fluffy has it own property age
alert(fluffy.hasOnwProperty('age'));


//Java script looks at an object to see if it has a value for concrete property name and if not
// then it asks it prototype
