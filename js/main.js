let calcBTN = document.querySelectorAll('.calcBTN');
let screen = document.querySelector('.calcScreen');
let result = "";
console.log(calcBTN)

calcBTN.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent == "AC") {
            screen.innerHTML = "";
        } else if (btn.textContent == "DE") {
            screen.innerHTML = screen.textContent.toString().slice(0, -1);
        } else if (btn.textContent == "=") {
            screen.innerHTML = eval(screen.innerHTML);
        } else {
            screen.innerHTML += btn.textContent;
        }

    })
});