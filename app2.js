const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnL = document.getElementById("btnL");
const left = document.getElementById("left")
const right = document.getElementById("right")
const btnR = document.getElementById("btnR");
const colorL = document.querySelector(".colorL");
const colorR = document.querySelector(".colorR");
var leftC = "#FFFFFF"
var rightC = "#FFFFFF"
var avg = "#000000"
btnL.addEventListener("click", function(){
    leftC = getRandomColor();
    left.style.backgroundColor = leftC;
    colorL.textContent = leftC +" -> "+ parseInt(leftC.substring(1), 16).toString();
    calcAvg();
    console.log(avg);

});
btnR.addEventListener("click", function(){
    rightC = getRandomColor();
    console.log(rightC);
    right.style.backgroundColor = rightC;
    colorR.textContent = rightC +" -> "+ parseInt(rightC.substring(1), 16).toString();
    calcAvg();
});

function getRandom(){
    return Math.floor(Math.random() * hex.length);
}
function getRandomColor(){
    let s = "#";
    for(i = 0; i<6; i++){
        s += hex[getRandom()];
    }
    return s;
}

function calcAvg(){
    avg = "#" + ((parseInt(leftC.substring(1), 16) + parseInt(rightC.substring(1), 16))/2).toString(16).substring(0, 6);
    document.body.style.backgroundColor = avg;

}