// Task 14: Track and display appointment date using Date object
const appointmentDate = new Date("2026-08-15T10:30:00");

console.log("Raw Date Object:", appointmentDate);
console.log("Formatted Appointment Date:", appointmentDate.toDateString());
console.log("Scheduled Time:", appointmentDate.toLocaleTimeString());

