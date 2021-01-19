
var flavors = ["chocolate", "strawberry", "vanilla", "mint", "cookies and cream"];

flavors.sort();

flavors.forEach(makeFlavorButtons)

document.getElementById("numFlavors").innerHTML = flavors.length;

function makeFlavorButtons(value) {
  var flav = "'" + value + "'"; //'vanilla'
  document.getElementById("flavors").innerHTML +=
    '<button type="button" class="btn btn-light" id="' +
    value +
    '" onclick="alertCustomer(' +
    flav +
    ')">' +
    value +
    "</button><br>";
}


function alertCustomer(flavor) {
  alert("You chose " + flavor);
}

