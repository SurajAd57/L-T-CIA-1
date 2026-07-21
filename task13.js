// Task 13: Print formatted summary using template literals
const patientName = "Rahul Sharma";
const age = 42;
const disease = "Hypertension";
const roomNo = 304;

const summary = `PATIENT SUMMARY:
----------------
Name: ${patientName}
Age: ${age} years
Diagnosis: ${disease}
Assigned Room: Room ${roomNo}`;

console.log(summary);
