// Promise (inside async code)
const getIDs = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // get something from backend
        resolve([1,2,3]);
        // in case of failiure
        reject('Error!!!');
    }, 1500);
    
});

const getRecipe = (recID) =>{
    return new Promise((resolve,reject)=>{
        setTimeout((ID) => {
            const recipe = {title:'Fresh tomato pasta',publisher:'Jonas'}; 
            resolve(`${ID}: ${recipe.title}`);
        }, 1500,recID);
       
    });
};

const getRelated = (publisher)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((pub) => {
            const recipe = {title:'Italian Pizza',publisher:'Jonas'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500,publisher);
    });
};

// Then when is succesful
getIDs.then((IDs)=>{
    return getRecipe(IDs[2]);
})
.then((recipe)=>{
    console.log(recipe);
    return getRelated('Jonas');
})
.then((recipe)=>{
    console.log(recipe);
})
// When is not succesful
.catch((error)=>{
    console.log(error);
});