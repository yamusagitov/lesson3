/*let num = 20;

function showFirstMessage(text) {
    alert(text);
    let num = 15;
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);*/

function calc(a,b) {
    return (a + b);
}

console.log(calc(3,4));


let calc = (a,b) => a+b;
console.log(calc(3,4));

let str = "test";
console.log(str.length);           // свойства


console.log(str.toUpperCase());    // метод
console.log(str.toLowerCase());