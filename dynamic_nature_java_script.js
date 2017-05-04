//dynamic nature of jaca script
var cat = {
  name: 'Fluffy',
  color: 'White',
  getColor: function() {
    alert(color);
  }
};

//adding a property
cat.age = 3;

//adding a method
cat.speak = function() {
  alert("Meoow");
}

cat.speak();
