function burgerControl() {
    let burgerMenu = document.querySelector(".header__burger");
    let header = document.querySelector(".header");
    burgerMenu.addEventListener("pointerdown", () => {
        burgerMenu.classList.toggle("active");
        header.classList.toggle("active");
        document.body.classList.toggle("lock");
    })
    window.addEventListener('resize', (e) => {
        if (this.innerWidth > 768) {
            burgerMenu.classList.remove("active");
            header.classList.remove("active");
            document.body.classList.remove("lock");
        }
    });
}
burgerControl();

function slider(n = 2) {
    let arrowPrev = document.querySelector(".about__arrow");
    let arrowNext = document.querySelector(".about__arrow_right");
    let slideArray = document.querySelectorAll(".about__slide");
    let screenWidth = 1195; //контейнер
    let indexSlide = 0;
    let visibleSlides = n - 1;  //количество видимых слайдов на экранах больше screenWidth (n - 1) , n - принимаемая переменная
    window.addEventListener("load", chekWindowWidth);
    window.addEventListener("resize", chekWindowWidth);

    arrowPrev.addEventListener("pointerdown", buttonDown);
    arrowNext.addEventListener("pointerdown", buttonDown);
    arrowPrev.addEventListener("pointerup", buttonUp);
    arrowNext.addEventListener("pointerup", buttonUp);
    arrowPrev.addEventListener("pointerover", buttonOver);
    arrowNext.addEventListener("pointerover", buttonOver);
    arrowPrev.addEventListener("pointerout", buttonOut);
    arrowNext.addEventListener("pointerout", buttonOut);
    arrowPrev.addEventListener("pointerdown", moveSlide);
    arrowNext.addEventListener("pointerdown", moveSlide);
    arrowPrev.addEventListener("pointerdown", moveAnimaton);
    arrowNext.addEventListener("pointerdown", moveAnimaton);

    function chekWindowWidth() {
        slideArray.forEach((item, index) => {
            item.style.display = "flex";
            if (window.innerWidth >= screenWidth && index > visibleSlides) {
                item.style.display = "none";
            }
            else if (window.innerWidth < screenWidth && index > 0) {
                item.style.display = "none";
            }
        })
    }

    function moveSlide() {
        let temp = visibleSlides;
        if (window.innerWidth < screenWidth) {
            if (this.classList.contains("about__arrow_right")) { ++indexSlide; }
            else { --indexSlide; }
        }
        if (window.innerWidth >= screenWidth) {
            if (this.classList.contains("about__arrow_right")) { indexSlide += n; }
            else { indexSlide -= n; }
        }
        if (indexSlide < 0) {
            indexSlide = slideArray.length - 1;
        }
        if (indexSlide >= slideArray.length) {
            indexSlide = 0;
        }
        slideArray.forEach((item) => {
            item.style.display = "none";
        });
        slideArray[indexSlide].style.display = "flex";
        if (window.innerWidth >= screenWidth) {
            for (let i = indexSlide + 1; i < slideArray.length && temp > 0; i++, temp--) {
                slideArray[i].style.display = "flex";
                if (i == slideArray.length) {
                    i = 0;
                }
            }
        }
    }

    function moveAnimaton() {
        slideArray.forEach((item) => {
            if (this.classList.contains("about__arrow_right")) {
                item.style.animation = "actionSlideRight  ease 1s  1";
            }
            else { item.style.animation = "actionSlideLeft  ease 1s  1"; }
        });
    };
}
slider();

let buttons = document.querySelectorAll(".button");
buttons.forEach((item) => {
    item.addEventListener("pointerdown", buttonDown);
    item.addEventListener("pointerdown", buttonDown);
    item.addEventListener("pointerup", buttonUp);
    item.addEventListener("pointerup", buttonUp);
    item.addEventListener("pointerover", buttonOver);
    item.addEventListener("pointerover", buttonOver);
    item.addEventListener("pointerout", buttonOut);
    item.addEventListener("pointerout", buttonOut);
});

function buttonDown() {
    this.style.transform = this.classList.contains("about__arrow_right") ? "rotate(180deg) scale(0.8)" : "scale(0.8)";
    this.style.boxShadow = "0 0 3px #AD7C16";
}
function buttonUp() {
    if (this.classList.contains("about__arrow")) {
        this.style.transform = this.classList.contains("about__arrow_right") ? "rotate(180deg) scale(1.2)" : "scale(1.2)";
    }
    else {
        this.style.transform = "scale(1.05)";
    }
    this.style.boxShadow = "0 0 10px 3px #AD7C16";
}
function buttonOver() {
    if (this.classList.contains("about__arrow")) {
        this.style.transform = this.classList.contains("about__arrow_right") ? "rotate(180deg) scale(1.2)" : "scale(1.2)";
    }
    else {
        this.style.transform = "scale(1.05)";
    }
    this.style.boxShadow = "0 0 10px 3px #AD7C16";
}
function buttonOut() {
    this.style.transform = this.classList.contains("about__arrow_right") ? "rotate(180deg) scale(1)" : "scale(1)";
    if (this.classList.contains("about__arrow")) {
        this.style.boxShadow = "none";
    }
    else {
        this.style.boxShadow = "0px 4px 4px rgba(85, 85, 85, 0.25)";
    }
}

function chekForm() {
    let input = document.querySelector(".feedback__input-phone");
    let buttonSubmit = document.querySelector(".feedback__send-button");
    buttonSubmit.onclick = () => {
        (input.value == "") ? input.style.outline = "5px solid #F4D011" : input.style.outline = "none";
    }
}
chekForm();

function popUp() {
    let cards = document.querySelectorAll(".courses__card");
    let subitem = document.querySelectorAll(".header__sublink");
    subitem.forEach((item) => {
        item.addEventListener("pointerdown", (event) => {
           console.log("HELLO")
            cards.forEach((card) => {
                let titleCard = card.querySelector(".courses__card-title");
                if (item.textContent == titleCard.textContent) {
                    let popUp = document.createElement('div');
                    popUp.classList.add("pop-up");
                    let closeButton = document.createElement('div');
                    closeButton.classList.add("close-button");
                    closeButton.textContent = "X";
                    popUp.prepend(closeButton);
                    document.body.prepend(popUp);
                    closeButton.addEventListener("pointerdown", () => {
                        popUp.remove();
                    });
                    let clonecard = card.cloneNode("false");
                    clonecard.classList.add(".card");
                    popUp.append(clonecard);
                    popUp.style.visibility = "visible";
                }
            });
        },false);
    });
}
popUp();
// document.body.onclick = (e)=>{
//     console.log(e.target)
// }