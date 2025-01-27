function greeter(person: string): string {
  return "Hello, "+ person + "!";
}

function greeterArray(person: string[]): string {
  return "Hello, " + person.join(', ') + "!";
}

let user = ["1", "2", "3"];
console.log(greeterArray(user)); //This will work
console.log(greeter(user[0])); //This will also work