class Element{
    constructor(name,buildY){
        this.name=name;
        this.buildY=buildY;
    }
}

class Park extends Element{
    constructor(name,buildY,area,numTrees){
    super(name,buildY)
    this.area=area;
    this.numTrees=numTrees;
    }
    treeDensity(){
        let density=this.numTrees/this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element{
    constructor(name,buildY,length,size=3){
        super(name,buildY);
        this.length=length;
        this.size=size;
    }

    classifyStreet(){
        const classification = new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big'); 
        console.log(`${this.name}, build in ${this.buildY}, is a ${classification.get(this.size)} street.`);   
    }
}

const allParks = [
    new Park('Green Park',1987,0.2,215),
    new Park('National Park',1894,2.9,3541),
    new Park('Oak Park',1953,04,949),
];

const allStreets = [
    new Street('Ocean Avenue',1999,1.1,4),
    new Street('4th Street',2015,0.8),
    new Street('Sinset Boulevard',1982,2.5,2),
];

function calc(arr){
    const sum= arr.reduce((prev,cur,index)=>prev+cur,0);
    return [sum,sum/arr.length];
}

function reportParks(parks){
    console.log('-----PARKS-----');
    parks.forEach(park=> park.treeDensity());

    const ages = parks.map(park=>new Date().getFullYear()-park.buildY);
    const[totalAge,avgAge]=calc(ages);
    console.log(`Our ${parks.length} parks has an average of ${avgAge} years.`);

    const i = parks.map(park => park.numTrees).findIndex(park => park >=1000);
    console.log(`${parks[i].name} has more than 1000 trees`);
}

function reportStreets(s){
    console.log('-----STREETS-----');

    const[totalLength,avgLength]=calc(s.map(street=>street.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km with average of ${avgLength} km`);

    s.forEach(street=>street.classifyStreet())
}

reportParks(allParks);
reportStreets(allStreets);
