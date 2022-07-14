//variables
var zeroMate = 0;
var oneMate = "rock";
oneMate = "house";
zeroMate = "reggae";

//Global scope
var musicHolland = "heavyMetal";
console.log("musicHolland");
function concertMetal() {
    console.log("musicHolland");
}
concertMetal();

function concertClose () {
    country = "Germany"; // global
    console.log("country");
}
concertClose();
console.log(country);
