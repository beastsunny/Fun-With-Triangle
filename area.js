const inputs = document.querySelectorAll(".area-input");
const areaBtn = document.querySelector("#area-btn");
const areaOutput = document.querySelector("#output");

function multiplyBaseAndHeight(base, height) {
    const multipliedOutput = base * height;
    return multipliedOutput;
}



areaBtn.addEventListener('click', calculateArea);