//Imports

//Variables
const RES = document.querySelector(".res");
const PREV = document.querySelector(".prev");
let ans = 0;

//Class
class key {
    constructor(name, bgrdColor){
        this.name = name;
        this.bgrdColor = bgrdColor;
    }

    displayValue() {
        if (this.name === "=") {
            PREV.textContent = RES.textContent;
            ans = math.round(math.evaluate(RES.textContent),5);
            RES.textContent = ans;
        }
        else if (this.name === "DEL") {
            RES.textContent = RES.textContent.slice(0,-1);
        }
        else if (this.name === "AC") {
            ans = 0;
            PREV.textContent = ans;
            RES.textContent = "";
        }
        else if (this.name === "ANS") {
            RES.textContent += ans;
        }
        else if (this.name === "CE") {
            RES.textContent = "";
        }
        else {
            if (RES.textContent.length < 55){
            PREV.textContent = ans;
            RES.textContent += this.name;}
        }
    }
}

//Functions
function createFlexGrid(rows, columns, keysList) {
    const container = document.getElementById('keyboard');
    for (let i = 0; i < columns * rows; i++) {
        const item = document.createElement('button');
        item.className = 'key';
        item.textContent = keysList[i] == undefined ? "" : keysList[i].name;
        item.style.backgroundColor = keysList[i] == undefined ? "" : keysList[i].bgrdColor;
        item.style.flex = `1 0 calc((100% / ${columns}) - 7px)`;
        item.addEventListener('click', () => {
            item.style.outline = "2px solid grey";
            setTimeout(() => {item.style.outline = "0";}, 250);
            keysList[i] == undefined ? console.log("undefined") : keysList[i].displayValue();
        });
        container.appendChild(item);
    }
}

function defineKeyboard(value) {
    let color = "";
    if (!isNaN(value)) {
        color = "WhiteSmoke";
    }
    else if (value === "=") {
        color = "#87CEEB"
    }
    else if (value === "AC") {
        color = "#FA5F55"
    }
    array.push(new key(value, color));
}

//Main
PREV.textContent = ans;
let array = [];
const characterArray = ["(",")","DEL","CE","AC","e","7","8","9","/","pi","4","5","6","*","!","1","2","3","-","ANS",".","0","=","+"]
characterArray.forEach(defineKeyboard);
createFlexGrid(5, 5, array);
RES.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/^[A-Za-z0-9\/\*\-\+\.\(\)\!]$/.test(key) && RES.textContent.length < 55) {
        RES.textContent += event.key.toLowerCase();
    }
    else {
        switch(key) {
            case 'Enter':
                PREV.textContent = RES.textContent;
                ans = math.round(math.evaluate(RES.textContent),5);
                RES.textContent = ans;
                break;
            case 'Backspace':
                RES.textContent = RES.textContent.slice(0,-1);
                break;
        }
    }})