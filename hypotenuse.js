const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const outputEl = document.querySelector("#output");

function calculateSumOfsquares(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);