const person = {
	name: "John Doe",
	age: "33"
};

console.log(__dirname, __filename);

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greeting() {
		console.log(`My name is ${this.name} and I am ${this.age}`);
	}
}

module.exports = person;
module.exports = Person;
