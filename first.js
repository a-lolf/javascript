console.log("hello world");

let username = "amaan";
let userOne = {
  email: "amaan@email.com",
  phone: 870787,
};

console.log(userOne.email);

let userTwo = userOne;

userTwo.email = "ansari@email.com";

console.log(userTwo, userOne);

let marvel_heros = ["Ironman", "Spiderman", "Hulk"];

let dc_heros = ["Batman", "Superman", "Flash"];

console.log(...marvel_heros, ...dc_heros);
console.log([...marvel_heros, ...dc_heros]);

console.log(marvel_heros.concat(dc_heros));

console.log(Array.from("abcd"));

let obj1 = {
  1: "a",
  2: {
    22: "2a",
  },
};

let obj2 = {
  name: "amaan",
  age: 24,
  details: {
    profession: "SDE",
    more_details: {
      which_dev: "backend",
    },
  },
};

console.log(obj2.details.more_details.which_dev);


const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course

console.log(instructor);
