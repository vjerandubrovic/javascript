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

class Athlete extends Person{
    constructor(name,year,job,olympicGames,medals){
        super(name,year,job);
        this.olympicGames=olympicGames;
        this.medals=medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}


const John = new Person('John',1990,'teacher');
console.log(John.calculateAge());

const Johnson = new Athlete('Johnson',1990,'Baller',10,4);
Johnson.calculateAge();
Johnson.wonMedal();