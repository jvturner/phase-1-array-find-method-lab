// Write a function called superbowlWin ()
// #1 The function should receive 1 argument, an Array of JavaScript Objects
// #2 Each object has two properties: property #1 is year, property #2 is result
// #3 Use Array.prototype.find() to test through or iterate through each Object to see if the result is "W"
// #4 return the year the win occured
// #5 if no win is found return undefined.

function superbowlWin(record) {
    function isWinningYear(year) {
        if (year.result === "W") {
            return true
        } else {
            return false
        }
    }
    const winningYearObject = record.find(isWinningYear)
    if (winningYearObject) {
        return winningYearObject.year
    }
}


