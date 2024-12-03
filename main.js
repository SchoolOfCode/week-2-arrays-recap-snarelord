const favouriteSongs = ["Tiny Dancer", "Running Up That Hill", "Don't Stop Moving", "Tragedy", "Crazy Horses"];
const firstSevenDaysProfit = [1, 2, 4, 8, 16, 32, 64];

const friends = [
    "Name is Chris; special skill is changing lives.", 
    "Name is Lizzie; special skill is being friendly.", 
    "Name is Ben; special skill is code rapping.",
    "Name is Tao; special skill is hand raising.",
    "Name is Liz; special skill is crochet.",
    "Name is Patrick; special skill is Call of Duty.",
    "Name is Tim; special skill is analogies.",
    "Name is James; special skill is friendship.",
    "Name is Joseph; special skill is being positive.",
    "Name is Max; special skill is papier-mâché.",
];

let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  console.log(options[9]);
  console.log(options[4]);
  console.log(options[6]);

  let englishNumbers = ["one", "two", "three", "four", "five"];

  let index = 0; 

  /* while (index < englishNumbers.length) {
    console.log(englishNumbers[index]);
    index++;
  } 
    */
  // unsure about this or what the question expects - 
  // 👉 Declare an index variable and assign it the value of 0. 
  // 👉 In a while loop, console.log the array item at the current index and add 1 to the index variable.
  // 👉 Have the while loop run until the index is equal to or greater than the array's length property.

  for (let i = 0; i < englishNumbers.length; i++) {
    console.log(englishNumbers[i]);
  }

  let words = ["ben", "ha", "spla", "fa", "ca", "dra"];
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i] + "t";
  }

console.log(words);