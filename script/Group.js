function member(name,favColor,hobby){
    this.name=name;
    this.favColor=favColor;
    this.hobby=hobby;
}
let Juan = new member('Juan','Seven','Walk my tortoise')
let Yandile = new member('Yandile','Brown','Sleeping')
let Luke = new member('Luke','Black','Fishing')
let Zenande = new member('Zenande','Pinkish-Grey','Reading')
let Sivuyile = new member('Sivuyile','Blue','Coding')
let Alulutho = new member('Alulutho','Black','Watching K-drama')

let test = ['zenande','sivuyile','alulutho']

// for (i in test){
//     console.log(i);
    
// }
let group = [Juan,Yandile,Luke,Zenande,Sivuyile,Alulutho]

for (i of group){
    console.log(i);
    
}
