//CRUD
//CREATE
//READ
//UPDATE
//DELETE

//ARRAY[]

 const shoppingList= [
    'rice',
    'soap',
    'flour',
    'sugar',
    'vaseline',
    'chrome',
     'milk',

];
console.log(shoppingList);


const students=[
    {
      name: 'Mitchelle',
      gender: 'female',
      role: 'student',
    },
    {
        name: 'Peter',
        gender: 'Male',
        role: 'student',
    },
    {
        name: 'Chance',
      gender: 'Male',
      role: 'student',

    },
    {
        name: 'Masela',
        gender: 'female',
        role: 'student', 
    },
    {
        name: 'Zawadi',
      gender: 'female',
      role: 'classrep',

    }
    ]
console.log(students);


    const phoneNumbers= [+254716445941, +254790799791, +254718350142, +254729418274]

    console.log(phoneNumbers);
    
  

    const shoppinglist= [
      'soap',
      'bread',
      'sugar',
      'book',
    ]
    console.log(shoppinglist);

    const arrlength=shoppinglist.length
    
    //size of an array
    console.log(shoppinglist.length);
    

    console.log(shoppinglist[2]);
    
    //Access last element in an array
    console.log(shoppinglist[arrlength -1]);

    //the at method   does the same job as arrlength
    console.log(shoppinglist.at(-1));
    
    
    //Array Methods
    //.push()  adds an element to the end

    const student=[];

    console.log(student);  //provides an empty array with 0 length

    console.log(student.push('Mitchelle','Victor','Priscilla','Faith'));

    // .unshift()  adds element at the start
    
    console.log(student.unshift('Faith','Priscilla'));

    // ...spread operator =Non-destructive
    const fruits=[
      'mango',
      'pineapple',
      'apple',
      'banana',
      'passion',
      'avocado',
    ]
    const allfruits=['melon','peach',...fruits];

    console.log(fruits);
    console.log(allfruits);

    //.pop() removes the last element  //removes avocado
    console.log(allfruits.pop());

    //.shift() removes the first element  //removes melon
    console.log(allfruits.shift());
    
    //.slice() removes 0 or more elements  =Nondestructive
    const places=[
      'chicago', //(0)
      'nairobi', //(1)
      'newyork', //(2)
      'texas',
      'dublin',
    ]
console.log(places);
console.log(places.slice(3));


    

    
    