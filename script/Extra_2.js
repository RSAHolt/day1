// // TODO: Loop through the array below and print all the values in the array.
let numbers = [3,6,9,12,15,18]
//This loop iterates through the array and returns the items inside
for (const i of numbers){
    //Output the item at the current index,i.
    console.log(i);
    
}

// // TODO: Create a variable called sum. Loop through the previous array again and add
// the values to the variable called sum. Make sure to print the sum with an appropriate
// message.
var sum = 0
//similar to before but adds the current item at the current index to 'sum'
for (const i of numbers){
    sum+=i;
    
}
//output of sum after for loop is completed
console.log(`Appropriate message: ${sum}`);

// // TODO: Create a new variable called oddSum. Loop through the array used in the
// first question again and only add the odd numbers to the oddSum variable.(Yes you
// need a conditional statement inside the loop)
var oddSum = 0
for (const i of numbers) {
    //if i divided by 2 has a remainder that is not zero, add i to oddSum
    if (i%2 != 0) {
        oddSum+=i
    }
}
//output oddSum
console.log(oddSum);

// // TODO: Create an object of yourself , called ’friend1’ with properties of name,
// nickname, favFoods(This value has to be an ‘array’ with 2 values), hobbies (This value
// has to be an ‘array’ with 2 values).
// let friend1 = {
//     name:'Luke',
//     nickname:'Look',
//     favFoods:['Beef Vetkoek','Lamb Curry'],
//     hobbies:['Fishing','Gaming']

// }

// // TODO: Now print 2(minimum) sentences out using the created object. Make sure
// to use all the different favFoods and Hobbies. E.g output --> Hi. My name is Matthew
// and my friends call me Brownie. I always eat Gatsby after jogging on a Sunday
// morning . I also love eating pizza after a good game of Squash(Also, don’t judge me
// o(*￣▽￣*)o )
// Be creative and create your own sentences.
// console.log(`Hello I'm ${friend1.name} and I like eating ${friend1.favFoods[0]} while ${friend1.hobbies[1]}`);
// console.log(`My nick name is ${friend1.nickname} and I also like eating ${friend1.favFoods[1]} while ${friend1.hobbies[0]}`);


// // TODO: Create a constructor function and create objects of people around your
// table namely friend2, friend3 and friend4. They should have the same properties and
// amount of values as friend1. Make sure to change friend1 so that you are using the
// constructor function when creating it.(Make sure to comment out the previous
// declaration of friend1)
function friendsley(name,nickname,favFoods,hobbies){
    this.name = name;
    this.nickname = nickname;
    this.favFoods = favFoods;
    this.hobbies = hobbies;
}

let friend1 = new friendsley('Luke','Look',['Beef Vetkoek','Lamb Curry'],['Fishing','Gaming'])
let friend2 = new friendsley('Juan','One',['Banana','Apples'],['Soccer','Talking'])
let friend3 = new friendsley('Eliase','Ielie',['Spaghetti','Chicken'],['Gaming','Talking'])
let friend4 = new friendsley('William','Willy',['Pasta','Meat Balls'],['Gaming','Not talking'])

// // TODO: Push the created objects(friend1, friend2, friend3, friend4) to an array
// called friends. Loop through the array called friends and print each object.
let friends=[]
friends.push(friend1)
friends.push(friend2)
friends.push(friend3)
friends.push(friend4)

for (const i of friends){
    console.log(i);
    
}

// // TODO: Change your loop to only print the the friend if they have a hobby of Soccer.
// *** You are not allowed to use javascript methods for this question***
for (const i of friends){
    for (let x of i.hobbies)
        if(x=='Soccer')
            console.log(`Juan plays ${x}!`);
    
}

// // TODO: Create a new loop to add a new hobby called ‘Being a legend’ to each friend
// without changing them individually.
for (const i of friends){ 
    i.hobbies.push("Being a legend")
}

console.log(friends);

