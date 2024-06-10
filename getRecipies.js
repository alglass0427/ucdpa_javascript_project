//********************************************** */

/* -----------------------getRecipes------------------------- */


// let mealsResponse = []
const getData = () => fetch('https://dummyjson.com/recipes')
.then(function (response) {
    return response.json();
})
// .then(console.log);
.then( function (data) {
    console.log("pr")
        // console.log(data.recipes)
// data.people.map(astronaut => `<tr><td>${astronaut.name}</td><td>${astronaut.craft}</td></tr>`)
// let mealsResponse = []
//     data.recipes.forEach(recipe => {
//         mealsResponse.push(recipe)
        // console.log(recipe)
        // mealList = data;

    let meals = arrangeMeals(data.recipes)
    console.log(`API MEALS Types`)
    console.log(cleanArray(meals[0]))


         })
    
        const dataPromise = getData();

        const useData = async () => {
          const result = await dataPromise;
        //   return result;
        };
        
        // const useData2 = async () => {
        //   const result = await dataPromise;
        //   console.log(result);
        // };

        // const mealList = getData()
        // console.log(mealList)
        // console.log("USE DATA")
        // console.log(useData())

// console.log(getData())
// return  mealsResponse
    // console.log(mealsResponse.recipes)
    // mealsResponse.recipes
// }

// )

// mealsResponse.recipes.name