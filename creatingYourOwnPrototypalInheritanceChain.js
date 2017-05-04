'use strict';

function Animal(voice) {
  this.voice = voice || 'grunt';
}
Animal.prototype.speak = function() {
  alert(this.voice)
};

function Cat(name, color) {
  Animal.call(this, 'Meow');
  this.name = name;
  this.color = color;
}

Cat.prototype = Object.create(Animal.prototype); //object.create is not going to call the Animal function
//it is just goint to set that function as the prototype and set up the prototype chain
Cat.prototype.constructor= Cat;
var fluffy = new Cat('Fluffy', 'White');
fluffy.speak();

alert(fluffy instanceof Cat); //it is true correctly
alert(fluffy instanceof Animal); //it is true also
