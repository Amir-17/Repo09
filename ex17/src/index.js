// Only change code below this line
function inverseWhile() {
    var i = 5;
    var fiveNumbers = "";
    while (i >= 0) {
        if (i == 0) {
            fiveNumbers = fiveNumbers.concat(i);
        } else {
            fiveNumbers = fiveNumbers.concat(i, ",");
        }
        i--;
    } 
    return fiveNumbers;
}
// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;