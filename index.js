function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for(var i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i > facts.length) {
    facts[i] = facts[i] + '!!!';
  }
  return facts;
}