/* ----------------------- menus--------------------------*/

class Meal {
    constructor(name,type) {
        this.name = name;
        this.type = type;
    }
    sayHello () {
        console.log(`Dish type: ${this.type}`)
    }
}


// let Spaghetti_Bol =  {

//     name: "Spaghetti",
//     type: "Pasta",
//     ingredients:["Sauce","Meatballs","Pasta"],
//     spiceIndex: 3,
//     catagory: "beef",

// }


// Parent class: Menu
class Menu {
    constructor(name) {
        this.name = name;
        this.items = [];
    }
 
    addItem(item) {
        this.items.push(item);
    }
 
    getItems() {
        return this.items;
    }

    printMenu() {
console.log(`Menu: ${this.name}`);
        this.items.forEach(item => {
console.log(`${item.name} - $${item.price}`);
        });
    }
}
 
// Child class: FoodItem
class FoodItem {
    constructor(name, price) {
    this.name = name;
    this.price = price;
    
    }
}
 
// Child class: Appetizer
class Appetizer extends FoodItem {
    constructor(name, price) {
        super(name, price);
    }
}
 
// Child class: MainCourse
class MainCourse extends FoodItem {
    constructor(name, price) {
        super(name, price);
    }
}
 
// Child class: Dessert
class Dessert extends FoodItem {
    constructor(name, price) {
        super(name, price);
        }  
    }
    

 
// Example usage:
const menu = new Menu('Restaurant Menu');
 
const appetizer1 = new Appetizer('Spring Rolls', 5.99);
const mainCourse1 = new MainCourse('Grilled Salmon', 18.99);
const dessert1 = new Dessert('Cheesecake', 6.99);
 
menu.addItem(appetizer1);
menu.addItem(mainCourse1);
menu.addItem(dessert1);

//Print menu From the menu class  -  
//Menu class has food items -  foor items have extended class meal types
// menu.printMenu();
