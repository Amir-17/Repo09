// Only change code below this line
function myDoWhile() {
    var myNumbers = "";
    var i = 0;
    do {
         if (i == 9) {
                myNumbers = myNumbers.concat(" ", i);
        } else if (i == 0) {
                myNumbers = myNumbers.concat(i, ",");
        }
        else {
                myNumbers = myNumbers.concat(" ", i, ",");
        }
        i++;
    } while (i < 10);
    return myNumbers;
}
console.log(myDoWhile());
// Only change code above this line
module.exports = myDoWhile;