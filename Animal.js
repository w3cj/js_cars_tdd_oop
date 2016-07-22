function Animal(name, age, say) {
  this.name = name;
  this.age = age;
}

var dog = new Animal('Fido', 12, 'Wuff');

console.log(dog.name);
console.log(dog.age);
