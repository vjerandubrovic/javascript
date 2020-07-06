// class Human{
    
//     constructor(){
//         this.gender = 'male';
//     }

//     printGender(){
//         console.log(this.gender);
//     }

// }


// class Person extends Human{
    
//     constructor(){
//         super();
//         this.name = 'Max';
//     }

//     printMyName(){
//         console.log(this.name);
//     }
// }

class Human{
    
    gender = 'male';
  

    printGender=()=>{
        console.log(this.gender);
    }

}

class Person extends Human{
    
    name = 'Max';
    
    printMyName=()=>{
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();