'use strict';

var arr = ['red', 'blue', 'green'];

var last = arr[arr.length - 1]; //the same as new Array('red' , 'blue' ,'green')

Object.defineProperty(Array.prototype, 'last', {
  get: function() {
    return this[this.length - 1];
  }
});

var last2 = arr.last;
alert(last2);


//what are prototypes
var myFunc = function() {};
myFunc.prototype; //just an empty object

var cat = {
  name: 'Fluffy'
};
cat.__proto___

//a functions protytype is the object instance that will become the prototype for
//all objects created using this funtion as a constructor

//an object's prototype is the object instance from which the object is inherited
