'use strict'

var cat = {
  name: {first: ' Fluffy', last: ' LaBeouf'},
  color: 'White'
}

Object.defineProperty(cat, 'name', {configurabe: false})

delete cat.name;

//There are three things that are affected by makieng a property nonconfigurable.
//You cannot change the enumerable attribute, configurable attribute
// you cannot delete the property
