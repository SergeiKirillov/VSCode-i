const MyArray = [1,2,3,4,55];
console.log(MyArray);
const NewArray =MyArray.map(el => el+3);
console.log(NewArray);


//Operator
const button = {
    width: 200,
    text: 'Buy'
}
console.table(button);

const redButton = {
    ...button, 
    color: 'red'
}
console.table(redButton);

//Destructuring
const userProfile = {
    name1: 'Vladilen',
    commentsQty: 23,
    isLoggedIn: false,
}

const{name1, commntQty} = userProfile;
const{isLoggedIn} = userProfile;
console.log(name1);
console.log(isLoggedIn);


const fruits = ['Apple', 'Banana'];
const[fruitOne, fruitTwo] = fruits;
console.log(fruitOne);
console.log(fruitTwo);

let value = 5;
console.log(value >=0 ? value : -value);
value = -4;
console.log(value >=0 ? value : -value);


//Классы
class Comment {
    constructor(text) {
        this.text = text;
        this.votesQty = 0;
    }
    upvote() {
        this.votesQty += 1;
    }
}

const firstComment = new Comment('First comment');
console.log(firstComment);
firstComment.upvote();
console.log(firstComment); 

//Расширение классов
class ExtendedComment  extends Comment {
    info(){
        return `Comment: ${this.text} - ${this.votesQty} votes`;
    }
}
const secondComment = new ExtendedComment('Second comment');
secondComment.upvote();
console.log(secondComment.info());
secondComment.upvote();
console.log(secondComment.info());

// 


let a=10;
const b=20;


function sum(x=1,y=2){
    return x+y;
}   
console.log(sum());

const myfunc2=(x=0,y=0)=>{
    console.log("Hello World");
    let z;
    z=x+y;
    return z;
}
console.log(myfunc2(10,20));

const personOne = {
    name: "John",
    age: 30,
    city: "New York"
};

function incPersonAge(person, increment = 1) {
    person.age += increment;
    return person;
}
console.log(incPersonAge(personOne, 5));
console.log(personOne.age);

const myArray = [1, 2, 3, 4, 5];
console.log(myArray);
console.log(myArray.length);

myArray[2] = 'abc'; // Modify the third element
console.log(myArray);
console.log(myArray.length);

//Push new elements
myArray.push(6);
console.log(myArray);
console.log(myArray.length);
myArray.push(true);
console.log(myArray);
console.log(myArray.length);

//pop elements
myArray.pop();
console.log(myArray);
console.log(myArray.length);
myArray.pop(2);
const removedElement = myArray.pop();
console.log("Removed Element:", removedElement);
console.log(myArray);
console.log(myArray.length);

//map element
const newArray = [1,2,3];
console.log(newArray);
const newArray2 = newArray.map((value) => value + 2);
console.log(newArray2);
const newArray3 = newArray.map((value) => value );
console.log(newArray3);

//Promise
console.log("Promise");
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error('Error fetching data:', error));

//Async Await
async function fetchData(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetchData(url).then(data => console.log(data));


//Архитектура Node.js ------------------------------------------------

const fs = require('fs');

/*
//Блокирующие операции
const data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("File read finished");
*/

//НЕБлокирующие операции
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
console.log("Continue...");