function lunch(box) {
    const randomPosition = Math.floor(Math.random() * box.length); // Use box.length
    const randomBox = box[randomPosition]; // Use box instead of names
    return randomBox + " is going to win his life"; // Add space in the string
}

const foods = ["pizza", "honey", "chicken", "mutton"];
console.log(lunch(foods)); // Output: e.g., "pizza is going to win his life"