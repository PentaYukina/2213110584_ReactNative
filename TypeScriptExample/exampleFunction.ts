interface Person {
  name: string;
  age: number;
}
//Create array of Person objects
const people: Person[] = [
  { name: "John Lee", age: 30 },
  { name: "Merry Burner", age: 25 },
  { name: "Harry Kill", age: 35 }
];
//Function to filter people who are at least 30 y
function filterAdults(persons: Person[]): Person[] {
  return persons.filter(person=>person.age>=30);
}
//Using the function
const adults = filterAdults(people);
console.log(adults)
