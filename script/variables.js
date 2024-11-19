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

// //object literal - declare (make) an object
// let table = {
//     material:"wood",
//     no_of_legs:4,
//     occupied:true
// }
// //Bracket notation
// console.log(table['material']);
// //Dot notation
// console.log(table.material);
// //Destructuring
// // let material = table.material//wood
// let {material,occupied} = table//wood

// console.log(material);

// //functions
// function greeting(){
//     console.log(`Hello ${material}`)
// }
// greeting()

// function greetings(a,b){
//     //a&b are paramet
//     console.log('This is a greeting'+(a+b))
// }

// let num1 = 5
// ++num1 pre increment
// num1++ post decrement
// --num1 pre decrement
// num1 -- post decrement
// console.log(num1++);
// console.log(num1);

// //String Methods
// let myString = "Something "
// //Shows us the length of the string
// let length=myString.length
// //Make text capital --> myString.toUpperCase()
// //Make text small letter --> myString.toLowerCase()
// let split = myString.split('')
// console.log(split);

//Conditionals
// let myString="Something"
// if(myString == "Something"){
//     console.log("The String is equal to Something");
// } else if(typeof myString== 'string') {
//     console.log("The String is a string but it is not equal to Something")
// }else{
//     console.log("The String is not equal to Something")
// }


// let age = 17
// if(age>=18){
//     console.log("You qualify for your drivers");
// } else if(age>=16 && age<=18) {
//     console.log("You'll need to get your Learner's first")
// }else{
//     console.log("You are way too ")
// }

// let num = 5
// if(num%2===0){
//     console.log(`${num} is even `)
// }else{
//     console.log(`${num} odd`)
// }

// let mat = 56
// let phy = 71
// let eng = 55

// avg= (mat + phy + eng)/3

// if(80<=avg && avg<=100){
//     console.log("A");
// } else if(70<=avg && avg<=79) {
//     console.log("B")
// } else if(60<=avg && avg<=69) {
//     console.log("C")
// }else if(50<=avg && avg<=59) {
//     console.log("D")
// }else if(avg>=100 || avg <0) {
//     console.log("Does not compute")
// }
// else{
//     console.log("(っ °Д °;)っ)")
// }
// console.log(avg)

// 1 - 'Sunny'
//2 - 'Cloudy'
//3 - 'Raining'

// let value = 1
// switch (value) {
//     case 1:
//         console.log('It is sunny')
//         break;
//     case 2:
//         console.log('It is cloudy')
//         break;
//     case 3:
//         console.log('It is raining')
//         break;
//     default:
//         break;
    
// }

// let numder = 5
// switch (true) {
//     case numder%2==0 :
//         console.log('Number is even')
//         break;
//     default:
//         console.log('Number is odd')
//         break;
    
// }

// console.log(num>10?'True':'False');

// let studAtLC = true

// console.log(studAtLC?"This is a student":"This is not a student")

//for loop
// for (let x=1; x<=10; x++){
//     console.log(x)
// }

// //while loop
// let w=1
// while(w<=5){
//     console.log("My Name")
// w++
// }

//do while
// do{
//     console.log("My name");
//     w++
// }while(w<=5)

//for loop
// let names =["Juan","William","Raeesa"]

// for (let x=0;x<names.length; x++){
//     console.log(names[x])
// }

//for-of loop
// for(let name of names){
//     console.log(name);
//     }

//for-in loop
// for(let name in names){
//     console.log(names[name])
// }


//functions
//without return keyword
// function greet(name){
//     console.log("Hi "+name);
    
// }

// greet("Matthew")

//with return keyword
// function returned(a){
//     return a //return will replace where you called the function
// }

// console.log('The number is '+returned('forty five'))

//annonymous functions are not hoisted and cannot be called before being declared
// let run=function(a){
//     console.log('You are running '+a);   
// }
// run("alone")

//self-invoking function -peak anonymous function
// (function(){
//     console.log("haha I'm anonymous");
    
// })()

//arrow function
// let walk = ()=>{
//     console.log('You are walking');
// }

// walk()

//or

// let walk = a => 'You are walking '+ a
// console.log(walk('poesly'));

//recursive function
//callback function

//Objects constructors and error handling
// let person = {
//     name:'Luke',
//     surname: 'Smart',
//     hairType:'Straight',
//     fullname: function(){
//         return this.name+this.surname;
        
//     },
//     halfname(){
//         return this.name+this.hairType
//     },
//     get quartername(){
//         return this.surname + this.hairType
//     }
// }
 
// let {name}=person
// console.log(name);

// person.favColour='Black'

// console.log(person.fullname());
// console.log(person.halfname());
// console.log(person.quartername);

// let notaperson = {
//     name : 'Juan',
//     surname :'twothree',
//     hairstle : 'Blessed be thy head',
//     age :'YoungsterCPT',
//     gender : 'Undefined',
//     head: 'He gives it' 
// }

// function createPerson(name, surname, hairstyle, age, gender, head){
//     return{name:name,
//     surname:surname,
//     hairstyle:hairstyle,
//     age:age,
//     gender:gender,
//     head:head
//     }
// }

// let JuannieBoy = createPerson(notaperson.name,notaperson.surname,notaperson.hairstle,notaperson.age,notaperson.gender,notaperson.head)
// console.log(JuannieBoy)
// let person1 = createPerson('Matthew', 'Brown', 'Curly','Unknown','Undefined','Big Brain' )
// console.log(person1);
// JuannieBoy.hosja = 'Jou p'
// console.log(JuannieBoy);

// function Person(name, surname, hairstyle, age, gender, head){
//     this.name=name;
//     this.surname=surname;
//     this.hairstyle=hairstyle;
//     this.age=age;
//     this.gender=gender;
//     this.head=head;
    
// }
// // Person.prototype.fullname=function(){
//     console.log('Hi'+ this.name);
    
// }

// let input = prompt('What is your name?')
// alert(`You are a ${input}`)

// let Willy=new Person('Free','Willy','Short','Middle','Non-Binary','Takes it from JuannieBoy')
// let JuanieBoi= new Person('Juan','twothree','Blessed be thy head','YoungsterCPT','Undefined','He gives it' )

// let people = [Willy,JuanieBoi]
// console.log(people);

// for (let object of people){
//     if (object.hairstyle =='Short'){
//     console.log(object.name);
//     }
    
// }

// let cars = [
//     {
//         brand:"Toyota"
//         models:[{

//          }]
//     },
//     {
//         brand:"BMW"
//     }
// ]

// function times(a,b){
//     if (typeof a != 'number' || typeof b != 'number')
//         throw new Error('Hol\' up a or b is not a number')

    
//     return a*b
// }

// try {
//     console.log(times(1,8));
//     console.log('hi there times!');
    
    
// } catch (e) {
//     console.error(e);
//     console.log('this is after the error');
        
// }finally{
//     console.log('Yay! I have run and I\'m out of breath');
    
// }