//var h2text = ["First h2", "Second H2"];
Array.prototype.shuffle = function () {
    let input = this;
    for (let i = input.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}
var colorArr = ['#6f98a8', '#2b8ead', '#2f454e', '#2b8ead', '#2f454e', '#bfbfbf', '#bfbfbf', '#6f98a8', '#2f454e'];

var tempArray = [[1, colorArr[0]], [2, colorArr[1]], [3, colorArr[2]], [4, colorArr[3]], [5, colorArr[4]], [6, colorArr[5]], [7, colorArr[6]], [8, colorArr[7]], [9, colorArr[8]]];
for (var i = 0; i <= 8; i++) {
    console.log("tempArray[" + i + "]::" + tempArray[i][0] + " | " + tempArray[i][1]);
}
function init(tempArray) {
    // Change the Color
    document.getElementById("one-color").style.backgroundColor = tempArray[0][1];
    document.getElementById("two-color").style.backgroundColor = tempArray[1][1];
    document.getElementById("three-color").style.backgroundColor = tempArray[2][1];
    document.getElementById("four-color").style.backgroundColor = tempArray[3][1];
    document.getElementById("five-color").style.backgroundColor = tempArray[4][1];
    document.getElementById("six-color").style.backgroundColor = tempArray[5][1];
    document.getElementById("seven-color").style.backgroundColor = tempArray[6][1];
    document.getElementById("eight-color").style.backgroundColor = tempArray[7][1];
    document.getElementById("nine-color").style.backgroundColor = tempArray[8][1];
    // Change the Number
    var doTimeout = function (obj, text, timeout, i) {
        setTimeout(function () {
            obj.style.opacity = 0; //make text temporarily invisible
            setTimeout(function () {
                obj.innerHTML = text;
                obj.style.opacity = 1; //fade back in
            }, timeout); //this timeout needs to be the same as the transition speed
        })
    }

    var idArr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (var i = 0; i <= 8; i++) {
        var obj = document.getElementById(idArr[i]);
        obj.style.transition = "0.5s";
        obj.style.opacity = 0;
        var text = tempArray[i][0];
        var timeout = 500;
        doTimeout(obj, text, timeout, i);
    }
}
function shuffle() {
    tempArray.shuffle();
    init(tempArray);
}
function sort() {
    tempArray.sort();
    init(tempArray);
}
init(tempArray);