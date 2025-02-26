let output = [];
let count = 1;

function fizzbuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzbuzz");
    } else if (count % 3 === 0) {
        output.push("fizz");
    } else if (count % 5 === 0) {
        output.push("buzz");
    } else {
        output.push(count);
    }
    count++;
}

// Example usage:
for (let i = 0; i < 15; i++) {
    fizzbuzz();
}

console.log(output);