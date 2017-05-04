'use strict';

class Animal{
    constuctor(voice){
      this.voice = voice || 'grunt';
    }
    speak(){
      alert(this.voice);
    }
}

class Cat extends Animal{
    constructor(name, color){
      super('Meow');
      this.name = name;
      this.color = color;
    }
}

var Fluffy = new Cat('Fluffy', 'White');
Fluffy.speak();
