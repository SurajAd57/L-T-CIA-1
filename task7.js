// Task 7: Use break or continue while looping based on age condition
const patients = [
    { name: "Suman", age: 25 },
    { name: "Aarav", age: 12 },   // Minor - will skip
    { name: "Ramesh", age: 72 },  // Senior over 70 - will break loop
    { name: "Priya", age: 34 }
];

console.log("--- Processing Patient Queue ---");
for (let i = 0; i < patients.length; i++) {
    if (patients[i].age < 18) {
        console.log(`Skipping minor patient: ${patients[i].name}`);
        continue; // Skip minor
    }
    
    if (patients[i].age > 70) {
        console.log(`Critical age threshold reached (${patients[i].name}). Stopping loop.`);
        break; // Stop loop
    }

    console.log(`Processing adult patient: ${patients[i].name}`);
}
