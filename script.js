let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let sym = ['!', '@', '#', '$', '&', '>', '?', '*', '№', '.', '<', ',', '}'];
let smile = ['😁', '😂', '😃', '😄', '😅', '😈', '😉', '😊', '😋', '😌', '😍', '😎', '😏', '😐', '😒', '😓', '😔', '😖', '😘'];
const genButton = document.querySelector('.btng'),
    container = document.querySelector('.container');
container.addEventListener('submit', (event) => {
    event.preventDefault();

});
document.getElementById('slider').oninput = function () {
    document.getElementById('lengthP').innerHTML = this.value;
    passLen = this.value;
    passGen();
}

genButton.addEventListener('click', () => {
    passGen();
});

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function passGen() {
    document.querySelector('.out').innerHTML = "";
for(let j = 0;j < 3;j++){
    let pass = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if (document.getElementById('smile').checked) {
        pass = pass.concat(smile);
    }
    if (document.getElementById('numbers').checked) {
        pass = pass.concat(num);
    }
    if (document.getElementById('symbolin').checked) {
        pass = pass.concat(sym);
    }
    pass.sort(() => Math.random() - 0.5);
    let out = '';
    lenPa = document.getElementById("slider").value;
    for (let i = 0; i < lenPa; i++) {
        out += pass[randomInteger(0, pass.length - 1)];
    }

    document.querySelector('.out').innerHTML += '<p>' + out + '</p>';
}
}