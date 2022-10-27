const numbers = document.querySelectorAll(".rating-style");
const submitButton = document.querySelector("#first-btn");
const form = document.querySelector("#first-form");
const thankyou = document.querySelector(".thankyou-container");
const rate = document.querySelector("#rate");

let clicked = false;
let rating = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        if (!clicked) {
            numbers[i].style.backgroundColor = "#FF7700"
            clicked = true;
            rating = numbers[i].innerText;
        }

    })
}
submitButton.addEventListener("click", function (event) {
    event.preventDefault()
    form.classList.add("hide");
    thankyou.classList.remove("hide");
    rate.innerText = rating;
})


