console.log("hello world");

let username = "amaan"
let userOne = {
    "email": "amaan@email.com",
    "phone": 870787

}

console.log(userOne.email);

let userTwo = userOne

userTwo.email = "ansari@email.com"

console.log(userTwo, userOne);


let marvel_heros = ["Ironman", "Spiderman", "Hulk"]

let dc_heros = ["Batman", "Superman", "Flash"]


console.log(...marvel_heros, ...dc_heros);
console.log([...marvel_heros, ...dc_heros]);

console.log(marvel_heros.concat(dc_heros));

console.log(Array.from("abcd"));
