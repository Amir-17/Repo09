// Only change code below this line
function myForLoop1() {
    var evenNumbers = "";
    for (var i = 0; i <= 8;  i+= 2) {
        if (i == 8) {
                evenNumbers = evenNumbers.concat(" ", i);
        } else if (i == 0) {
                evenNumbers = evenNumbers.concat(i, ",");
        }
        else {
                evenNumbers = evenNumbers.concat(" ", i, ",");
        }
    }
    return evenNumbers;
}
function myForLoop2() {
    var evenInverseNumbers = "";
    for (var i = 8; i >= 0;  i-= 2) {
        if (i == 0) {
                evenInverseNumbers = evenInverseNumbers.concat(" ", i);
        } else if (i == 8) {
                evenInverseNumbers = evenInverseNumbers.concat(i, ",");
        }
        else {
                evenInverseNumbers = evenInverseNumbers.concat(" ", i, ",");
        }
    }
    return evenInverseNumbers;
}
console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above thisline
module.exports = {
    myForLoop1,
    myForLoop2
};
