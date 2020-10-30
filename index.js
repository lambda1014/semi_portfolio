const one = document.querySelector(".chromeApp");
const two = document.querySelector(".painting");
const three = document.querySelector(".eventHandler");
const four = document.querySelector(".handleResize");
const five= document.querySelector(".dDay");
const six = document.querySelector(".countrySelection");
const seven = document.querySelector(".toDoList");
const eight = document.querySelector(".randomNumber");
const nine = document.querySelector(".calculator");

const superHandler = {
    goOne: function () {
        window.open('https://lambda1014.github.io/js_chrome_app/', '_blank'); 
    },

    goTwo: function () {
        window.open('https://lambda1014.github.io/js_painting/', '_blank'); 
    },


    goThree: function () {
        window.open('https://lambda1014.github.io/js_addEventLister/', '_blank');
    },

    goFour: function () {
        window.open('https://lambda1014.github.io/js_handleResize/', '_blank');
    },

    goFive: function () {
        window.open('https://lambda1014.github.io/js_christmasDday/', '_blank');
    },

    goSix: function () {
        window.open('https://lambda1014.github.io/js_countrySelection_LS/', '_blank');
    },

    goSeven: function () {
        window.open('https://lambda1014.github.io/js_todoList/', '_blank');
    },

    goEight: function () {
        window.open('https://lambda1014.github.io/js_randomNumberGame/', '_blank');
    },

    goNine: function () {
        window.open('https://lambda1014.github.io/js_calculator/', '_blank');
    }
};

function init(){
    one.addEventListener("click", superHandler.goOne);
    two.addEventListener("click", superHandler.goTwo);
    three.addEventListener("click", superHandler.goThree);
    four.addEventListener("click", superHandler.goFour);
    five.addEventListener("click", superHandler.goFive);
    six.addEventListener("click", superHandler.goSix);
    seven.addEventListener("click", superHandler.goSeven);
    eight.addEventListener("click", superHandler.goEight);
    nine.addEventListener("click", superHandler.goNine);
}

init();



