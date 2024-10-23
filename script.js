document.getElementById("one").addEventListener("click", madlibs);

function madlibs() {
  let pluralNoun = document.getElementById("pluralNounInput").value;
  let adjective = document.getElementById("adjectiveInput").value;
  let presentTenseVerb = document.getElementById("presentTenseVerbInput").value;
  let noun = document.getElementById("nounInput").value;

  let output = `There are too many ${pluralNoun} on this ${adjective} airplane! I screamed. "Somebody has to ${presentTenseVerb} on the ${noun} to solve this problem!`;

  document.getElementById("madlibsOut").innerHTML = output;
}

document.getElementById("two").addEventListener("click", madlibsTwo);

function madlibsTwo() {
  let pluralNoun = document.getElementById("pluralNounInput").value;
  let adjective = document.getElementById("adjectiveInput").value;
  let presentTenseVerb = document.getElementById("presentTenseVerbInput").value;
  let noun = document.getElementById("nounInput").value;

  let outputs = `There once was a(n) ${adjective} ${noun} on one million ${pluralNoun}. I was so scared, but I used my bravery and commanded the crowd. "Go ${presentTenseVerb} on the ${noun}!!" We can do it!`;

  document.getElementById("madlibsOut").innerHTML = outputs;
}
