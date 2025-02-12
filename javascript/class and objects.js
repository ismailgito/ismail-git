//class and object
const ismail ={
    name: "ajaml",
    age: 25,
    isStudeny:true,
    isDeveloper:true,
    isLenskartian:true,
    greet: function()
    {
        console.log("Hello, I am "+this.name+" and I am "+this.age+" years old.");
    }

};
//objects
console.log(ismail.name);
console.log(ismail.age);
console.log(ismail.isStudeny);
console.log(ismail.isDeveloper);
console.log(ismail.isLenskartian);

//calling the function 
console.log(ismail.greet());         //() is used to call the function


// another class and objects 

//class
class Worker {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, I am " + this.name + " and I am " + this.age + " years old.");
    }
}

//objects
const worker1 = new Worker("ajaml", 25);
console.log(worker1.name);
console.log(worker1.age);

//calling the function
worker1.greet();




// pending work 