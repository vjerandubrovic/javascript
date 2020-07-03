console.log("CLASSES");
//classes

class Person{
    constructor(name,year,job){
        this.name=name;
        this.year=year;
        this.job=job;
    }

    calculateAge(){
        var age = new Date().getFullYear()-this.year;
        console.log(age);
    }
}

const John = new Person('John',1990,'teacher');
console.log(John.calculateAge());