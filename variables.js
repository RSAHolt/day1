//Variable

// Strings
// let name = "your name"
/* */
// const name = "your name"
// var name = "your name"

// Numbers
// let number1 = 10.5

// Bool
// let value = true //false

// Underfine
// let name

//Null
// let value = null

//Symbols

// let name = "you name"
// let num = 5

// console.log(`My name is ${name}`);
// console.log("My name is \n"+ name + num)

//Array
// let myArray = ['anything',2,true, 'string']
// console.log(myArray[0])

//Camelcase -> myArray(always used in JS)
//Pascalcase -> MyArray
//Kebabcase -> my-array(only use in vue)
//Snakecase -> my_array

//object literal - declare (make) an object
let table = {
    material:"wood",
    no_of_legs:4,
    occupied:true
}
//Bracket notation
console.log(table['material']);
//Dot notation
console.log(table.material);
//Destructuring
// let material = table.material//wood
let {material,occupied} = table//wood

console.log(material);

//functions
function greeting(){
    console.log(`Hello ${material}`)
}
greeting()

function greetings(a,b){
    //a&b are paramet
    console.log('This is a greeting'+(a+b))
}

let num1 = 5
// ++num1 pre increment
// num1++ post decrement
// --num1 pre decrement
// num1 -- post decrement
console.log(num1++);
console.log(num1);

//String Methods
let myString = "Something "
//Shows us the length of the string
let length=myString.length
//Make text capital --> myString.toUpperCase()
//Make text small letter --> myString.toLowerCase()
let split = myString.split('')
console.log(split);
