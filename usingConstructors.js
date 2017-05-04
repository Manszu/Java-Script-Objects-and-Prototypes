'use strict';

function Cat() {
  this.name = "Fluffy";
  this.color = "White";
};

var cat = new Cat(); //new returns an empty object and sets the context of this to that new empty object


//following refers to window object
// function Cat() {
//   this.color = 'White';
// };
// var cat = Cat(); //undefined
//alert(window.color); //returns white

//function to create any type of cat Also called constructor
function Cat(name, color) {
  this.name = name;
  this.color = color;
};

var cat = new Cat('maxix', 'bialy');
alert(cat.name);


//function to
