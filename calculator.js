
const score = 89;

if(score > 89 &&  score < 101) {
    console.log("You got an A!");
} else if(score > 79 &&  score < 90) {
    console.log("You got a B!");
} else if(score > 69 &&  score < 80) {
    console.log('You got a C.');
} else if(score > 59 &&  score < 70) {
    console.log("You got a D"); 
} else if (score < 60) {
    console.log("You got an F");
} else {
    console.log("Undefined grade");
}