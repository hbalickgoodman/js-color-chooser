const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function(){
    let hexColor = getRandomColor();
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
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