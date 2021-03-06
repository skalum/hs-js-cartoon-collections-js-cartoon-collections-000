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
  const numWords = words.length;

  for (let i = 0; i < numWords; i++)
    if (words[i].length > 4) return true;

  return false;
}

function findTheCheese (foods) {
  const numFoods = foods.length;

  for (let i = 0; i < numFoods; i++)
    if (isCheese(foods[i])) return foods[i];

  return "no cheese!";
}

function isCheese(food) {
  if (food == "cheddar" || food == "gouda" || food == "camembert")
    return true;

  return false;
}
