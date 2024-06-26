
/* --------------------ingredients--------------------- */

//Print the recipes from JSON
// const mealListJS = JSON.parse(mealList)
// console.log("MEALS")
// console.log(mealList)

// console.log(mealList)
// console.log(mealListJS)

//function to take the response object and catagorize based
//on conditions and response and Array of Arrays


// const cerealAllergens =  ["Wheat","Rye","Barley","Oats"]
// const allergens = ["Egg","Fish","Peanuts","Milk","Celery","Mustard","Sesame seeds","Lupin",
//                     ["Wheat","Rye","Barley","Oats"],   //Cereals
//                     ["Almond", "Hazelnut", "Walnut", "Cashew", "Pecan", "Brazil nut", "Pistachio", "Macadamia", "Queensland"] //Tree Nuts
//                 ]

// //Pizza and Pizza Ingredients 
// const piza_type = ["Marinara", "Regina", "Artica", "Margherita", "Romana", "Napoletana",
// "Siciliana", "Quattro stagioni", "Quattro formaggi", "Calzone",
// "Guarnita", "Hawaiana"]

// const pizzaIngredients = [[" tomato ", " garlic ", " oregano ", " olive oil "],
// [" tomato ", " mozzarella ", " ham ", " mushrooms "],
// [" arugula ", " mozzarella ", " shrimps ", " salmon "],
// [" tomato ", " mozzarella ", " basil ", " olive oil "],
// [" tomato ", " anchovy ", " oregano ", " olive oil "],
// [" tomato ", " black olives ", " oregano ", " olive oil "],
// [" tomato ", " basil ", " anchovy ", " capers "],
// [" ham ", " mushrooms ", " olives ", " artichokes "],
// [" mozzarella ", " gorgonzola ", " parmesan cheese ", " goat cheese "],
// [" mozzarella ", " ham ", " tomato ", " egg "],
// [" tomato ", " pepperoni ", " green peppers ", " mushrooms "],
// [" mozzarella ", " tomato ", " ham ", " pineapple "]];


function arrangeMeals(menu) {

    let returnArrays = []
    let mealTypes = []
    let desserts = []
    // let other = []
    let main = []
    // let lunch = []
        menu.forEach(element => {            
            mealTypes.push(element.mealType)
            if( element.mealType.includes("Dinner") 
                || element.mealType.includes("Lunch") 
                || element.mealType.includes("Breakfast")
             ){
              main.push(element)
           
            } else if(element.mealType.includes("Dessert")){
                desserts.push(element)
            }
            
            });
    
         returnArrays.push(main)
         returnArrays.push(mealTypes) 
        //  returnArrays.push(other) 
         returnArrays.push(desserts)  
        //  returnArrays.push(lunch)   
        // console.log(mealTypes);
        return returnArrays;
    
        };   
    
    
    // let meals = arrangeMeals(mealList.recipes)
    // console.log(`Meal Types`)
    // console.log(cleanArray(meals[1]))
    // console.log(`Mains`)
    // console.log(meals[0])
    // console.log(`Desserts`)
    // console.log(meals[2])
    
    // console.log(desserts)
    // recursiveRemoveDup(meals)


//Create Pizza from 2 Inputs 
//1 - Array with the Pizza Name
//2 - Array with the Pizza Ingredients with paired index
function createPizza (piz,ingr) {
    if (piz.length !== ingr.length) {
        alert("Not Enough Ingregient in List!!!")
    } else {
        for(let i = 0; i < piz.length; i++ ){
            let $pizzaVar = piz.name
            let pizza =  new meal (piz[i],"Pizza",ingr[i]);   
        }      
//End if
        }   

}

// Meal Class  -  Create a Meal  with 3 constructor  Inputs
class meal {
    constructor(name,type,ingredients) {
        this.name = name;
        this.type = type;
        this.ingredients = ingredients;

    }
    myIngrediants () {
        console.log(`${this.type} - Ingredients are  ${this.ingredients}`)
    }
}


// createPizza(piza_type,pizzaIngredients);


//Call cleanIngredients to Remove Duplicates  -  to Handle Arrays in Arrays
// let singleIngredients =  cleanArray(pizzaIngredients)
// console.log(singleIngredients)

//Use the same to get Allergen list from array With arrays
let singleAllergens =  cleanArray(allergens)
// console.log(singleAllergens)

// console.log(singleIngredients) //- - Check the List

//Call function too add active ingredients to the List
// getIndgredients(singleIngredients)


//Add Ingrediants list to dropdown
//First idea to add the list of active incredients to A dropdown
function getIndgredients (ingList) {
    
    //Itterate through list of incredients    
        for(i = 0; i < ingList.length ; i++ ){       
            //ID the Parent Element
            let dd  = document.getElementById("ingregients_list");
            //Create the Child element
            let opt = document.createElement("option");
            //Clean the child value
            let cap = capitalize(ingList[i].trim())
                opt.value = ingList[i];
            //Add the Dropdown Value
                opt.innerHTML = cap;
                dd.appendChild(opt)
        }
    }
    
// }

let allergenContainer  = document.getElementById("food-allergens");
let searchContainer  = document.getElementById("search-container");


function addSearchButton(){
    
    try {
        let searchButton = document.getElementById("searchButton")
        // nonExistentFunction();
        if (searchContainer.contains(searchButton)){
            console.log("Search Exists");
            }
        else {let search = document.createElement("button");
            search.textContent = "Search";
            search.id = "searchButton";
            search.type = "search";
            search.value = "Search";
            search.classList.add("fa", "fa-search");
            search.id = "searchButton"
            // search.classList.add("fa-search") //font awesome css 
            searchContainer.appendChild(search)
           
        }
      } catch (error) {
        console.error(error);
        // Expected output: ReferenceError: serachButton is not defined
        // (Note: the exact output may be browser-dependent)
      }
}


function getSearchResults(){
    document.getElementById("searchButton").addEventListener("click",
    function (evt) {
    
    //     let allergenListSelected = gatherAllergens()
    //     console.log(allergenListSelected)
    //     let test1 = getRecipeNotContainingAllergens(
    //         mealList.recipes,allergenListSelected,containsPartialWord
    //     )
    //     console.log(test1)
        
    //     // num = getRandomNumber(test1.length)
    //     // console.log(test1[num])
    //     // console.log(test1)
    
    //     // let testarr = []
    //     // testarr.push(test1[num])
    //     // testarr.push(test1[num + 6])
    
    //      createMenuCards(test1)
    // }
    getAllTheData()}
    )

}



function addAllergens (allergies) {
    
    //Itterate through list of incredients  
    //some Test data
 
    // createMenuCards(testarr)

    // try {
    //     let searchButton = document.getElementById("searchButton")
    //     // nonExistentFunction();
    //     if (searchContainer.contains(searchButton)){
    //         console.log("Search Exists");
    //         }
    //     else {let search = document.createElement("button");
    //         search.textContent = "Search";
    //         search.id = "searchButton"
    //         search.type = "search";
    //         search.value = "Search";
    //         search.classList.add("fa", "fa-search");
    //         search.id = "searchButton"
    //         // search.classList.add("fa-search") //font awesome css 
    //         searchContainer.appendChild(search)
           
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     // Expected output: ReferenceError: serachButton is not defined
    //     // (Note: the exact output may be browser-dependent)
    //   }

    addSearchButton()


        for(i = 0; i < allergies.length ; i++ ){       
            //ID the Parent Element
            // let span = document.createElement("span");
            let inp = document.createElement("input");
            inp.type = "checkbox";
            inp.classList.add("select-allergens");
            inp.id = allergies[i];
            // inp.checked = "unchecked"
            
            //Create the Child element
            let lbl = document.createElement("label");
            lbl.textContent = allergies[i];
            lbl.htmlFor = allergies[i];
            lbl.textContent = allergies[i];
            lbl.appendChild(inp);

            allergenContainer.appendChild(lbl);

        }
        
    getSearchResults()
// document.getElementById("searchButton").addEventListener("click",function (evt) {
    
//     let allergenListSelected = gatherAllergens()
//     console.log(allergenListSelected)
//     let test1 = getRecipeNotContainingAllergens(
//         mealList.recipes,allergenListSelected,containsPartialWord
//     )
//     console.log(test1)
    
//     // num = getRandomNumber(test1.length)
//     // console.log(test1[num])
//     // console.log(test1)

//     // let testarr = []
//     // testarr.push(test1[num])
//     // testarr.push(test1[num + 6])

//      createMenuCards(test1)
// }
// )  

    }




//Ensures spaces are removed And first letter is capital
function capitalize(stringToCapitalize) {
    let capitalizedString = ""
    return stringToCapitalize[0].toUpperCase() + stringToCapitalize.slice(1,stringToCapitalize.length)
}

//Test The capital function
function testFunction(fnc,result) {
    if (fnc === result) {
        console.log(`${fnc} : "Pass"`);}
    else {console.log(`${fnc} : "Fail"`)}
}

testFunction(capitalize("alan"),"Alan")

//Recursive Function to handle Arrays in Arrays
//cleanArray calls a recursive Function to get list where arrays in arrays 

function cleanArray(inputArray){
    let newArray = [];
    recursiveRemoveDup(0,inputArray,newArray);
    return newArray; 
}

function recursiveRemoveDup(ind,inputArray,newArray) {
    if(ind >= inputArray.length) return;
    
    //if the index of the array is an array itself, 
    //pass in this array[index] as input Array and
    //the new array
    if(Array.isArray(inputArray[ind])) {
        recursiveRemoveDup(0,inputArray[ind],newArray);
     } else {
        if(!newArray.includes(inputArray[ind])){
            newArray.push(inputArray[ind]);
        }
     }
     recursiveRemoveDup(ind+1,inputArray,newArray);
}


//Query selector for food-allergens form with checkboxes
let frm = document.querySelector("#food-allergens")

//section for allergen checkboxes
let isAllergic =  document.getElementById("isAllergic")

//event listener to list the allergens
isAllergic.addEventListener("change", () => {
    if(isAllergic.value === "Yes") {
        console.log("This person is allergic")
        addAllergens(singleAllergens)
    } else if (isAllergic.value === "No") {
        addSearchButton()
        getSearchResults()
        removeAllChildren(frm)
        console.log("NO Allergies")
}}
)

//removes all child elements from a parent element
function removeAllChildren(parentElement){
    while(parentElement.lastElementChild){
        parentElement.removeChild(parentElement.lastElementChild)
    }     
}

//gather the list of allergens selected by ID
//id is created from the list of active allergens
function gatherAllergens() {
    // let selectedAllergens = document.querySelectorAll('.select-allergens');
// selectedAllergens
let alllergensList  = []
const checkboxes = document.querySelectorAll('.select-allergens');
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
// console.log(checkbox.checked);
// console.log(`${checkbox.id} is checked.`);
alllergensList.push(checkbox.id)
            } 
            // else {
// console.log(`${checkbox.id} is not checked.`);
            // }
        });

        return alllergensList

}



// console.log(allergenListSelected)
// function getMealData(menu,alleryList = ["Dough"]) {
// let main  = []
//     menu.forEach(element => {
//         // console.log(element.mealType)
//         // get the list of individual meals
        
        
      
//         if( element.ingredients.includes("Dough") 
//             // || element.ingredients.includes("Lunch") 
//             // || element.ingredients.includes("Breakfast")
//          ){
//           main.push(element)
//         // } else if(element.mealType.includes("Lunch")){
//         //     main.push(element)
//         // } else if(element.mealType.includes("Breakfast")){
//         //     main.push(element)
//         // } else if(element.ingredients.includes("Dessert")){
//         //     desserts.push(element)
//         // 
//     }
        
//         });
//         return main;
// }


// const test = containsPartialWord(mealList.recipes[0].ingredients, "dough");
// console.log(test); // Output: true
// console.log(`Meals NOT containing Allergens`)
// let test1 = getRecipeNotContainingAllergens(mealList.recipes,[],containsPartialWord)
// console.log(test1)

//test "result" below expects true
////itterate though the object and check if the recipe ingredients "ContainsPartial word" 
//ingredients are true then added to filtered array
function containsPartialWord(arr, partialWord) {  
    return arr.some(item =>
            item.includes(partialWord)
    );
}

///REMOVED To add to  API Call

// function getRecipeNotContainingAllergens (arr,arrAllerens,callBackFunction) {
//     let finalMeals = []
//     for (let i = 0; i < arr.length; i++) {
//         //loop through allergens
        
//         count = 0
//         //Map the ingredients list to Upper Case as tmp
//         console.log(arr[i].name)
//         tmp = arr[i].ingredients.map(function(x){return x.toUpperCase()})
//         // console.log(tmp)
//         for (let j = 0; j < arrAllerens.length; j++) {
//             // console.log(arrAllerens[j])
//             // console.log(arr[i].ingredients)
//             console.log(`${arrAllerens[j]} : ${callBackFunction(tmp,arrAllerens[j].toUpperCase())}`)
//             // result is boolean of contains Partial words
//             if (callBackFunction(tmp,arrAllerens[j].toUpperCase())){
//                 // count The allergens
//                 count ++
                
//             }

//         }
//         //if result remails 
//     if(count === 0){finalMeals.push(arr[i])}
//     }
// return finalMeals

// }

function getRandomNumber (number) {
    let randomNumber = Math.floor(Math.random()*number)
     console.log(randomNumber)   
    return randomNumber
}

// TEST together - Get Allergens (one added on load) , return The meals that do   not contain and select A random meal from the list

// let allergenListSelected = gatherAllergens()
// console.log(allergenListSelected)
// let test1 = getRecipeNotContainingAllergens(mealList.recipes,allergenListSelected,containsPartialWord)


///Check if array, if object the add the opject to an Array
//adds dynamic cards to site  -  removes existing if present with removeAllChildren
function createMenuCards(arrChoice) {
    let cont = document.getElementById("menu-container")
    removeAllChildren(cont)

    for (let i = 0; i < arrChoice.length; i++) {

        
        let elDiv = document.createElement("div")
            elDiv.classList.add("menu-item" , "card")
        // let elul  = document.createElement("ul")
        let elH2  = document.createElement("h2")
        let elimg  = document.createElement("img")
        let elH3Ing  = document.createElement("h3")
        let elH3Ins  = document.createElement("h3")
        let elpIngred  = document.createElement("p")
        let elpInstr  = document.createElement("p")

        
        elpIngred.textContent = arrChoice[i].ingredients;
        elpInstr.textContent = arrChoice[i].instructions;
        elH3Ing.textContent = "Ingrediants";
        elH3Ins.textContent = "Instructions";
        elH2.textContent = arrChoice[i].name;
        elimg.src = arrChoice[i].image;
        elimg.style.width = "300px"
        elimg.style.height = "100%"
        // elul.append(elH2,elimg,elH3Ing,elpIngred,elH3Ins,elpInstr)
        elDiv.append(elH2,elimg,elH3Ing,elpIngred,elH3Ins,elpInstr)
        // cont.appendChild(elul)
        cont.appendChild(elDiv)

    }

}

// let testarr = []
// testarr.push(test1[num])
// testarr.push(test1[num + 5])
// createMenuCards(testarr)

