const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for(var i=0; i<musicians.length; i++) {
      newArray.push(musicians[i] +  " plays " + instruments[i]);
  }
    return newArray;
}

var facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ];
      
function johnLennonFacts(facts) {
  var newArray = [];
  var n=0;
  while(n<facts.length) {
    newArray.push(facts[n] + "!!!");
    n += 1;
  }
  return newArray;
} 

function iLoveTheBeatles(number) {
  var sentence = 'I love the Beatles!';
  var newArray = [];
  var counter = 0;
  do {
    newArray.push(sentence);
    counter += 1;
  } while(counter <=number && number<15);
  return newArray;
}

  