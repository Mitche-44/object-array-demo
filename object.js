
//OBJECT USES {};
//An object has a key and a value eg:

const obj={
    Name: "Mitchelle Ngetich",
    Hobbies: {
        cooking: "chapati",
        dancing: "zumba"
    }
};
console.log(obj.Name);
console.log(obj.Hobbies);
//Access a specific object
//use console.log(obj.Hobbies.cooking)

console.log(obj.Hobbies.cooking)
//OR
console.log(obj['Hobbies']['cooking']);



//BRACKET NOTATION

const meals= {
     breakfast: "tea",
     lunch: "chicken",
     dinner: "ugali",

};
let mealName="lunch";
console.log(meals[mealName]);



const morningMeal="breakfast";
const middayMeal= "lunch";
const meal={
     [morningMeal]:"oats",
      [middayMeal]:"beef",
};
console.log(meal);


//OBJECT.KEYS
const sundayMenu= {
     cheese: {
        soft: "brie",
        semisoft: "fontina",
        hard: "provolone"
     },
     fries: {
        cripsy: "dip twice",
        normal: "once",
     },
     salad: "vegatables",

};
 console.log(Object.keys(sundayMenu));
 


 //HOW TO UPDATE IN OBJECTS.

 const books= {
       sciencefiction: "",
       fantasy: "",
       erotic: "",
       crime: "",
       political: "",
 }
 books.sciencefiction="Hobbit";
 books.fantasy= "Harry Potter";
 books.erotic= "It ends with us";
 books.crime= "The silent patient";
 books.political= "Inheritance";

 //add new property
 books.horror= "Wrong turn"


//USING SPREAD OPERATOR ...
const extrabooks={
    ...books,
    cultural: "The River and the Source",
};

 console.log(books);
 console.log(extrabooks);
 
 
 const user1 = {
	gender: 'Male',
	age: 50,
	firstName: 'John',
	surname: 'DoeSur',
	lastName: 'Doe',
	occupation: 'Technical Mentor',
	isHumourous: false,
	netWorth: 15,
	status: 'in a long term relationship',
	height: "7' 11",
	Nationality: 'Kenyan',
	phoneNumber: 712345678,
	hobbies: [
		'Watch Movies',
		'Reading-ish',
		'Twitter(X) fanatic',
		'Witch craft',
	],
 };


// check if a property exist
console.log(user1.isAParent);

 if (typeof user1.isAParent === 'undefined') {
	console.log('The property does not exist');
 } else {
	console.log(user1.isAParent);
 }

// using the in operator
// "key" in object
// boolean true or false
 if ('isAParent' in user1) {
 	console.log(`${'isAParent' in user1} : ${user1.isAParent}`);
  } else {
	console.log(`${'isAParent' in user1} : The property does not exist`);
}

//How to delete
delete books["erotic"]        //deletes erotic

//OBJECT METHODS
//1.object.keys
const keys=Object.keys(books);
   console.log(keys);
   
   //2.object.values
   const values=Object.values(books);
    console.log(values);
    

//for...in (iterate)
for (let key in books) {
    console.log(`${books[key]} is a good ${key} book`);
 }