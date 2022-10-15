const passport_input = document.querySelector(".passport_number");
const number_check = document.querySelector(".number_check");
const number_result = document.querySelector(".number_result");

const passportRegExp =  /^1 \d{0,13}$/;

number_check.addEventListener("click", () => {
     if (passportRegExp.test(passport_input.value)) {
         number_result.innerText = "ok";
         number_result.style.color = "green";
   } else {
         number_result.innerText = "not ok";
         number_result.style.color = "red";
   }
});



const block2 = document.querySelector('.block2')
const clcik = document.querySelector('.click')
let position = 0;

const move = () => {
    if (position <= 535)
    position+=16
    block2.style.left = `${position}px`;
    setTimeout(move, 100)
};
move();

