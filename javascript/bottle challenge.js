let numberOfPeople = 99; // Use `let` to allow decrementing
while (numberOfPeople >= 0) {
    let bottleworld = "bottles"; // Default to plural
    if (numberOfPeople === 1) {
        bottleworld = "bottle"; // Singular when only 1 bottle is left
    }

    console.log(`${numberOfPeople} ${bottleworld} of beer on the wall`);
    console.log(`${numberOfPeople} ${bottleworld} of beer`);
    console.log("Take one down, pass it around");

    numberOfPeople--; // Decrement the number of bottles

    if (numberOfPeople >= 0) {
        console.log(`${numberOfPeople} ${bottleworld} of beer on the wall`);
    } else {
        console.log("No more bottles of beer on the wall"); // Handle the case when no bottles are left
    }
    console.log(""); // Add a blank line for better readability
}