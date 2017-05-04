'use strict';

class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  speak() {
    alert('meaow');
  }
}

var cat = new Cat("Fluffy", "White");
cat.speak();
