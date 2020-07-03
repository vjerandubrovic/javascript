// ASYNC

function getRecipe(){
    setTimeout(() => {
        const recipeID =[0,1,2];
        console.log(recipeID);

        setTimeout((id) => {
            const recipe ={title:'Fresh tomato pasta',publisher:'Jonas'};
            console.log(`${id}: ${recipe.title}`);

            setTimeout((publisher) => {
                const recipe = {title:'Italian Pizza',publisher:'Jonas'};
                console.log(recipe);
            }, 1500, recipe.publisher);

        }, 1500,recipeID[1]);

    }, 1500);
}
getRecipe();