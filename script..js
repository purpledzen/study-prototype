const person = new Object({
    name: "Gleb",
    age: "33",
    greet: function () {
        console.log("Greetings!")
    }
})

Object.prototype.sayHello = function () {
    console.log("Hello!")
}