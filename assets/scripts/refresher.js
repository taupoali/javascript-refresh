const hobbies = ["Sports", "Cooking", "Karate"];
console.log(hobbies[2]);

hobbies.push("Coding");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === "Coding");
console.log(index);
