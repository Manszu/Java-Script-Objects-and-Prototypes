'use strict';

var cat = {
  name: 'Fluffy',
  color: 'White'
};

//dot notation
alert(cat.color);
//bracket notation
alert(cat['color']);

//property descriptor
alert(Object.getOwnPropertyDescriptor(cat,'name'));

//to change object property to not writable
Object.defineProperty(cat, 'name', {writable:false});

var cat2 = {
  name: {first: 'Fluffy', last: 'LaBeouf'}, //name is really just a pointer
  color: 'White'
};

Object.defineProperty(cat2, 'name', {writable:false});

//but you can change the object that is pointed to by that property
cat2.name.first = 'Scratchy';
//freeze the object
cat2.name.first = 'Scratchy2'; //error
alert(cat2.name.first);
