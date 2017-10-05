function dwarfRollCall(dwarves) {
  const numDwarves = dwarves.length;
  var dwarfString = "";

  for (let i = 0; i < numDwarves; i++) {
    dwarfString += `${i + 1}. ${dwarves[i]} `;
  }

  return dwarfString;
}

/* Here's how I would do it without the space at the end:
function dwarfRollCall(dwarves) {
  const numDwarves = dwarves.length;
  var numberedDwarves = [];

  for (let i = 0; i < numDwarves; i++) {
    numberedDwarves.push(`${i + 1}. ${dwarves[i]}`)
  }

  return numberedDwarves.join(" ");
} */

function summonCaptainPlanet(planeteerCalls){
  const numPlaneteers = planeteerCalls.length;
  var allCapsCalls = [];

  for (let i = 0; i < numPlaneteers; i++) {
    allCapsCalls.push(`${planeteerCalls[i].toUpperCase}!`);
  }

  return allCapsCalls;
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
