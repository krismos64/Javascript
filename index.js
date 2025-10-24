const fruits = ["pomme", "banane", "fraise"];

console.log(fruits[2] );

fruits[1] = "kiwi";
fruits.push ("ananas");

console.log(fruits.length);


console.log(fruits);

for (const fruit of fruits){
if (fruit.includes("a")) {
    console.log(fruit);
}
}