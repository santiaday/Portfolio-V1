$(document).ready(function() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });
});

window.onbeforeunload = function() {
    $(window).pageYOffset = 0;
    window.scrollTo(0, 0);
};

$(window).on('beforeunload', function() {
    $(window).pageYOffset = 0;
    window.scrollTo(0, 0);
});

$(document).ready(function() {
    $(this).scrollTop(0);
});

function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

disableScroll();
setTimeout(enableScroll, 10000);


const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 1000);


})

var quoteArray = ["Hello, World!"];
var textPosition = 0;
var speed = 75;

typewriter = () => {
    document.querySelector("#helloWorld").innerHTML = quoteArray[0].substring(0, textPosition);

    if (textPosition++ != quoteArray[0].length) {
        setTimeout(typewriter, speed);
    }


}



window.setTimeout(typewriter, 4500);

/*
const position = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    console.log(currentScroll);


    if (currentScroll <= 750) {
        opacity1 = 1 - currentScroll / 750;
    } else {
        opacity1 = 0;
    }

    if (currentScroll <= 0) {
        opacity2 = 0;
    } else if (currentScroll > 0 && currentScroll <= 900) {
        opacity2 = currentScroll / 765;
    } else if (currentScroll > 900 && currentScroll < 1638) {
        opacity2 = 1 - currentScroll / 1638;
    } else {
        opacity2 = 0;
    }

    if (currentScroll <= 765) {
        opacity3 = 0;
    } else if (currentScroll > 765 && currentScroll <= 1638) {
        opacity3 = currentScroll / 1638;
    } else if (currentScroll > 3000 && currentScroll < 5000) {
        opacity3 = 1 - currentScroll / 5000;
    } else {
        opacity3 = 1;
    }


    document.querySelector(".santiInfo").style.opacity = opacity1;
    document.querySelector(".about").style.opacity = opacity2;
    document.querySelector(".experience").style.opacity = opacity3;


});

*/


const homeLink = document.querySelector("#home");
const homeSection = document.querySelector(".santiInfo");
$(homeLink).click(function() {
    const homeOffset = $(homeSection).offsetTop;

    window.scrollTo(0, homeOffset);

});

const aboutLink = document.querySelector("#about");
const aboutSection = document.querySelector(".about");
$(aboutLink).click(function() {
    const aboutOffset = $(aboutSection).offset().top - $(window).height() / 5;

    window.scrollTo(0, aboutOffset);

});

const experienceLink = document.querySelector("#experience");
const experienceSection = document.querySelector(".experience");
$(experienceLink).click(function() {
    const experienceOffset = $(experienceSection).offset().top - $(window).height() / 5;

    window.scrollTo(0, experienceOffset);

});

const contactLink = document.querySelector("#contact");
const contactSection = document.querySelector("#formContainer");
$(contactLink).click(function() {
    const contactOffset = $(contactSection).offset().top - $(window).height() / 3;

    window.scrollTo(0, contactOffset);

});

const scrollDown = document.querySelector("#borderBottom");
$(scrollDown).click(function() {
    const aboutOffset = $(aboutSection).offset().top - $(window).height() / 5;

    window.scrollTo(0, aboutOffset);

});


const border = document.querySelector("#aboutMeBorder");
border.classList.remove('border-transition');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            border.classList.add('border-transition');
            return;
        }

        if (entry.isIntersecting) {
            border2.classList.add('border-transition');
            return;
        }

        border.classList.remove('border-transition');
    });
});


const border2 = document.querySelector("#experienceBorder");
border2.classList.remove('border-transition');

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            border2.classList.add('border-transition');
            return;
        }

        border2.classList.remove('border-transition');
    });
});

const border3 = document.querySelector("#contactBorder");
border3.classList.remove('border-transition');

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            border3.classList.add('border-transition');
            return;
        }

        border3.classList.remove('border-transition');
    });
});


observer.observe(document.querySelector("#aboutMe"));
observer2.observe(document.querySelector("#myExperience"));
observer3.observe(document.querySelector("#contactMe"));


const menuBtn = document.querySelector(".menuBtn");
const menuPage = document.querySelector(".rightSidePage");
let menuOpen = false;

menuPage.classList.add('closed');

menuBtn.addEventListener('click', () => {

    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuPage.classList.add('open');
        menuPage.classList.remove('closed');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuPage.classList.remove('open');
        menuPage.classList.add('closed');
        menuOpen = false;
    }
})

menuBtn.classList.remove('open');
menuPage.classList.remove('open');


window.onbeforeunload = function() {
    $(menuPage).addClass('closed');
};

const experienceContainer = document.querySelector(".experience");
const currentH1 = document.querySelector("#currentH1");
const currentContainer = document.querySelector("#currentExperience");
const contactContainer = document.querySelector(".contact");
contactContainer.preventDefault;
let currentContainerOpen = false;

let currentHeight = 45;
$(experienceContainer).height(currentHeight + "em");


function expand(element) {
    $(element).addClass("expanded");
    $(element).removeClass("hidden");
}

function expandExperience() {
    currentHeight = currentHeight + 13;
    $(experienceContainer).animate({ height: currentHeight + 'em' }, 300, "swing");
}

function close(element) {
    $(element).addClass("hidden");
    $(element).removeClass("expanded");
}

function hideExperience() {
    currentHeight = currentHeight - 13;
    $(experienceContainer).animate({ height: currentHeight + 'em' }, 300, "swing");
}


$(currentH1).on('click', function() {
    experienceContainer.classList.remove("fullHeight");
    if (currentContainerOpen == false) {
        expand(currentContainer);
        expandExperience();
        currentContainerOpen = true;
    } else {
        close(currentContainer);
        hideExperience();
        currentContainerOpen = false;
    }
})


const pastH1 = document.querySelector("#pastH1");
const pastContainer = document.querySelector("#pastExperience");
let pastContainerOpen = false;

$(pastH1).on('click', function() {
    experienceContainer.classList.remove("fullHeight");
    if (pastContainerOpen == false) {
        expand(pastContainer);
        expandExperience();
        pastContainerOpen = true;
    } else {
        close(pastContainer);
        hideExperience();
        pastContainerOpen = false;
    }
})

const webDevPositionH1 = document.querySelector("#webDevH1");
const webDevDescription = document.querySelector("#webDevDescriptionContainer");
let webDevPositionOpen = false;

$(webDevPositionH1).on('click', function() {
    experienceContainer.classList.remove("fullHeight");
    if (webDevPositionOpen == false) {
        expand(webDevDescription);
        expandExperience();
        webDevPositionOpen = true;
    } else if (webDevPositionOpen == true) {
        close(webDevDescription);
        hideExperience();
        webDevPositionOpen = false;
    }
})

const contentMarketerPositionH1 = document.querySelector("#contentMarketerH1");
const contentMarketerDescription = document.querySelector("#contentMarketerDescriptionContainer");
let contentMarketerPositionOpen = false;

$(contentMarketerPositionH1).on('click', function() {
    experienceContainer.classList.remove("fullHeight");
    if (contentMarketerPositionOpen == false) {
        expand(contentMarketerDescription);
        expandExperience();
        contentMarketerPositionOpen = true;
    } else if (contentMarketerPositionOpen == true) {
        close(contentMarketerDescription);
        hideExperience();
        contentMarketerPositionOpen = false;
    }
})

const itEngineerPositionH1 = document.querySelector("#itEngineerH1");
const itEngineerDescription = document.querySelector("#itEngineerDescriptionContainer");
let itEngineerPositionOpen = false;

$(itEngineerPositionH1).on('click', function() {
    experienceContainer.classList.remove("fullHeight");
    if (itEngineerPositionOpen == false) {
        expand(itEngineerDescription);
        expandExperience();
        itEngineerPositionOpen = true;
    } else if (itEngineerPositionOpen == true) {
        close(itEngineerDescription);
        hideExperience();
        itEngineerPositionOpen = false;
    }
})

const expandAll = document.querySelector("#expandAll");
const collapseAll = document.querySelector("#collapseAll");


$(expandAll).on('click', function() {
    expand(itEngineerDescription);
    expand(contentMarketerDescription);
    expand(webDevDescription);
    expand(pastContainer);
    expand(currentContainer);
    experienceContainer.classList.add("fullHeight");
    $(experienceContainer).height(110 + 'em');
    currentHeight = 110;

    pastContainerOpen = true;
    contentMarketerPositionOpen = true;
    currentContainerOpen = true;
    webDevPositionOpen = true;
    itEngineerPositionOpen = true;
})

$(collapseAll).on('click', function() {
    close(itEngineerDescription);
    close(contentMarketerDescription);
    close(webDevDescription);
    close(pastContainer);
    close(currentContainer);
    experienceContainer.classList.remove("fullHeight");
    $(experienceContainer).height(45 + 'em');
    currentHeight = 45;

    pastContainerOpen = false;
    contentMarketerPositionOpen = false;
    currentContainerOpen = false;
    webDevPositionOpen = false;
    itEngineerPositionOpen = false;
})

$(window).on('beforeunload', function() {
    close(itEngineerDescription);
    close(contentMarketerDescription);
    close(webDevDescription);
    close(pastContainer);
    close(currentContainer);
    experienceContainer.classList.remove("fullHeight");
});

function addAnimation(input) {
    document.getElementById(input).style.animation = "shake 0.5s linear";
}

function removeAnimation(input) {
    document.getElementById(input).style.removeProperty("animation");
}

function validateForm() {

    const fname = document.querySelector("#fname");
    const lname = document.querySelector("#lname");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const invalidMessage = document.querySelector('#contactFillFields');
    const contactMessage = document.querySelector('#contactThankYou');

    let fnameVal = document.forms["myForm"]["firstname"].value;
    let lnameVal = document.forms["myForm"]["lastname"].value;
    let emailVal = document.forms["myForm"]["email"].value;
    let messageVal = document.forms["myForm"]["message"].value;




    if (fnameVal == "") {
        fname.classList.add("invalid");
        $("#fname").effect("shake", { times: 1, distance: 5 }, 200)
    } else {
        fname.classList.remove("invalid");
    }
    if (lnameVal == "") {
        lname.classList.add("invalid");
        $("#lname").effect("shake", { times: 1, distance: 5 }, 200)
    } else {
        lname.classList.remove("invalid");
    }
    if (emailVal == "") {
        email.classList.add("invalid");
        $("#email").effect("shake", { times: 1, distance: 5 }, 200)
    } else {
        email.classList.remove("invalid");
    }
    if (messageVal == "") {
        message.classList.add("invalid");
        $("#message").effect("shake", { times: 1, distance: 5 }, 200)
    } else {
        message.classList.remove("invalid");
    }
    if (fnameVal == "" || lnameVal == "" || emailVal == "" || messageVal == "") {
        invalidMessage.classList.add("shown");
        contactMessage.classList.remove("shown");
        return false;
    } else {
        invalidMessage.classList.remove("shown");
        return true;
    }
}


$("#submit").click(function(e) {
    validateForm();
    e.preventDefault();
    if (validateForm()) {
        const contactMessage = document.querySelector('#contactThankYou');
        var emailid = "santiagoaday7@gmail.com"

        jQuery.post("mail.php", {

            email: $("#email").val(),
            message: $("#message").val(),
            fname: $("#fname").val(),
            lname: $("#lname").val(),
            emailid: emailid


        }, function(data, textStatus) {

            if (data == 1) {
                alert("Mail not sent");
                e.preventDefault();
            } else {
                contactMessage.classList.add("shown");
                e.preventDefault();
            }

        });
    }

});