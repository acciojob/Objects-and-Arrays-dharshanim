const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

const team=players;


const team[...players];


const cap1={...person };


console.log(team);
console.log(team1);
console.log(cap1);





window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
