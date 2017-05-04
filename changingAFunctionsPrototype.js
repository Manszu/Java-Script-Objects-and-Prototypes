'use strict';

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'White')
var muffin = new Cat("muffin", "brown")

Cat.prototype = {
  age: 5
}

var snowbell = new Cat('Snowbell', 'White'); //it points to changed function prototype
