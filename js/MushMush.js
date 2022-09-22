//typewriter
let i = 0;
let txt = ''; // text
let speed = 50;

function typeWriter() {
    if (i === 0)
        document.getElementById("conversationText").innerHTML = "";

    if (i < txt.length) {
        document.getElementById("conversationText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

//audio
let audio = new Audio('audio/coffee-and-herbs-13066.mp3');
audio.volume = 0.03;

function playAudio() {
    if (document.getElementById("playAudio").value === "false") {
        audio.play();
        document.getElementById("playAudio").value = "true";
    } else {
        audio.pause();
        document.getElementById("playAudio").value = "false";
    }
}

//start button
function start() {
    let converstationBox = document.getElementById("conversationBox");
    let startButton = document.getElementById("start");
    document.getElementById("next").style.display = 'block';

    if ((startButton.style.display == "block") || (converstationBox.style.display == "none")) {
        converstationBox.style.display = "block";
        startButton.style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("title").style.display = "none";
        txt = 'Welcome to MushMush TeaHouse.';

        // reset the index
        i = 0;
        typeWriter();
    } else {
        converstationBox.style.display = "none";
    }
}

//prequel
function next() {
    txt = 'How can I help you?';

    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    document.getElementById('conversationBox').appendChild(div);
    div.setAttribute('id', 'conversationText1')
    div2.setAttribute('id', 'conversationText2')
    div3.setAttribute('id', 'conversationText3')

    document.getElementById("next").style.display = "none";

    div.onclick = function () {
        roadOne()
    };
    div2.onclick = function () {
        roadTwo()
    };
    div3.onclick = function () {
        roadThree()
    };
    document.getElementById('conversationBox').appendChild(div);
    document.getElementById('conversationBox').appendChild(div2);
    document.getElementById('conversationBox').appendChild(div3);

    document.getElementById("conversationText1").innerHTML = "o A nice cup of tea, please.";
    document.getElementById("conversationText2").innerHTML = "o This is a lovely TeaHouse";
    document.getElementById("conversationText3").innerHTML = "o How are you MushMush?";
    // reset the index
    i = 0;
    typeWriter();
}

//roadOne 1-1
function roadOne() {
    document.getElementById("conversationBox").style.display = "none";
    document.getElementById("gameMushroom").style.display = "none";


    let teaCard = document.createElement("teaCard");
    document.getElementById("game-Container").appendChild(teaCard);
    teaCard.setAttribute('id', 'teaCard')
    teaCard.value

    // earl grey
    let teaLeaves = document.createElement("teaLeaves");
    document.getElementById("teaCard").appendChild(teaLeaves);
    teaLeaves.setAttribute('id', 'teaLeaves')
    teaLeaves.setAttribute('class', 'item difFont flexFont')
    document.getElementById("teaLeaves").innerHTML = "Black tea";

    // Green tea
    let teaLeaves2 = document.createElement("teaLeaves2");
    document.getElementById("teaCard").appendChild(teaLeaves2);
    teaLeaves2.setAttribute('id', 'teaLeaves2')
    teaLeaves2.setAttribute('class', 'item difFont flexFont')
    document.getElementById("teaLeaves2").innerHTML = "Green tea";

    // white tea
    let teaLeaves3 = document.createElement("teaLeaves3");
    document.getElementById("teaCard").appendChild(teaLeaves3);
    teaLeaves3.setAttribute('id', 'teaLeaves3')
    teaLeaves3.setAttribute('class', 'item difFont flexFont')
    document.getElementById("teaLeaves3").innerHTML = "White tea";

    // herbal tea
    let teaLeaves4 = document.createElement("teaLeaves4");
    document.getElementById("teaCard").appendChild(teaLeaves4);
    teaLeaves4.setAttribute('id', 'teaLeaves4')
    teaLeaves4.setAttribute('class', 'item difFont flexFont')
    document.getElementById("teaLeaves4").innerHTML = "Herbal tea";

    // Sugar
    let sugar = document.createElement("sugar");
    document.getElementById("teaCard").appendChild(sugar);
    sugar.setAttribute('id', 'sugar')
    sugar.setAttribute('class', 'difFont flexFont')
    document.getElementById("sugar").innerHTML = "sugar";

    // Honey
    let honey = document.createElement("honey");
    document.getElementById("teaCard").appendChild(honey);
    honey.setAttribute('id', 'honey')
    honey.setAttribute('class', ' difFont flexFont')
    document.getElementById("honey").innerHTML = "honey";

    // milk
    let milk = document.createElement("milk");
    document.getElementById("teaCard").appendChild(milk);
    milk.setAttribute('id', 'milk')
    milk.setAttribute('class', 'difFont flexFont')
    document.getElementById("milk").innerHTML = "milk";

    //order
    let order = document.createElement("selected");
    document.getElementById("teaCard").appendChild(order);
    order.setAttribute('id', 'selected')
    order.setAttribute('type', 'text')
    order.setAttribute('class', 'difFont')
    document.getElementById("selected").innerHTML = "";

    function addTea(item) {
        var cart = document.getElementById("selected");
        $("#selected").append("<p class='cartitem' href='#' onclick='removeFromSelected(this)'>" + item.innerHTML + "&nbsp" + "</p>");

        $('.cartitem').click(function (e) {
            $(e.target).remove();
        });
    }

    function removeFromSelected(ele) {
        $("#selected").remove(ele);
    }
    $(function () {
        $('.item').click(function () {
            addTea(this);
        });
    });

    //submit
    let submit = document.createElement("button");
    document.getElementById("teaCard").appendChild(submit);
    submit.setAttribute('id', 'submit')
    submit.setAttribute('type', 'button')
    submit.setAttribute('class', 'order flexFont difFont')
    submit.onclick = function () {
        pleaseIWannaOrder();
    };

    function pleaseIWannaOrder() {

        let orderText = document.getElementById("selected")

        //blacktea
        if (orderText.innerHTML.includes("Black tea")) {
            document.getElementById("teaCard").remove();
            blackTea();
        }
        //green tea
        if (document.getElementById("selected").innerHTML.includes("Green tea")) {
            document.getElementById("teaCard").remove();

            greenTea();
        }
        //White tea
        if (document.getElementById("selected").innerHTML.includes("White tea")) {
            document.getElementById("teaCard").remove();
            whiteTea();
        }
        //Herbal tea
        if (document.getElementById("selected").innerHTML.includes("Herbal tea")) {
            document.getElementById("teaCard").remove();
            herbalTea();
        } else {}
    }
}

//black tea animation
function blackTea() {
    let movingBg = document.createElement("div");
    document.getElementById("game-Container").appendChild(movingBg);
    movingBg.setAttribute('id', 'movingBg')

    let teaMush = document.createElement("div");
    document.getElementById("game-Container").appendChild(teaMush);
    teaMush.setAttribute('id', 'teaMush')

    let makingBlackTea = document.createElement("div");
    document.getElementById("game-Container").appendChild(makingBlackTea);
    makingBlackTea.setAttribute('id', 'makingBlackTea')

    let makingBlackTea2 = document.createElement("div");
    document.getElementById("game-Container").appendChild(makingBlackTea2);
    makingBlackTea2.setAttribute('id', 'makingBlackTea2')

    document.getElementById("start").innerHTML = "Please enjoy your black tea,<br>do you want another one?";
    document.getElementById("start").style.textAlign = "center";
    document.getElementById("start").style.left = "210px";
    document.getElementById("start").style.top = "300px";

    let tl = gsap.timeline();
    tl.to(".gifBg", 5, {
        display: "block",
        background: "url(/images/get_teaWater.gif) no-repeat",
    })
    tl.to(".gifBg", 1, {
        display: "none",
    })
    tl.to("#teaMush", {
        display: "block",
        duration: 3,
        ease: "steps(5)",
        x: -850,
    })
    tl.to("#teaMush", {
        display: "none",
    })
    tl.to("#makingBlackTea", {
        duration: 6.3,
        display: "block",
    })
    tl.to("#makingBlackTea2", {
        display: "block",
        duration: 8,
    })
    tl.to("#makingBlackTea", {
        display: "none",
    }, "-+1")
    tl.to("#makingBlackTea2", {
        display: "none",
    })
    tl.to("#gameMushroom", {
        display: 'block',
        ease: "easeIn",
        duration: 8,
        y: -350,
    })
    tl.to('#title', {
        display: "block",
        backgroundSize: "50% auto",
        x: 150,
    }, "-=1")
    tl.to("#start", {
        display: 'block',
        opacity: 1,
        duration: 0.5,
        x: -10,
    })
}

function greenTea() {
    let movingBg = document.createElement("div");
    document.getElementById("game-Container").appendChild(movingBg);
    movingBg.setAttribute('id', 'movingBg')

    let teaMush = document.createElement("div");
    document.getElementById("game-Container").appendChild(teaMush);
    teaMush.setAttribute('id', 'teaMush')

    let makingGreenTea = document.createElement("div");
    document.getElementById("game-Container").appendChild(makingGreenTea);
    makingGreenTea.setAttribute('id', 'makingGreenTea')

    let makingGreenTea2 = document.createElement("div");
    document.getElementById("game-Container").appendChild(makingGreenTea2);
    makingGreenTea2.setAttribute('id', 'makingGreenTea2')

    document.getElementById("start").innerHTML = "Please enjoy your green tea,<br>do you want another one?";
    document.getElementById("start").style.textAlign = "center";
    document.getElementById("start").style.left = "210px";
    document.getElementById("start").style.top = "300px";

    let tl = gsap.timeline();
    tl.to(".gifBg", 5, {
        display: "block",
        background: "url(/images/get_teaWater.gif) no-repeat",
    })
    tl.to(".gifBg", 1, {
        display: "none",
    })
    tl.to("#teaMush", {
        display: "block",
        duration: 3,
        ease: "steps(5)",
        x: -850,
    })
    tl.to("#teaMush", {
        display: "none",
    })
    tl.to("#makingGreenTea", {
        duration: 6.3,
        display: "block",
    })
    tl.to("#makingGreenTea2", {
        display: "block",
        duration: 8,
    })
    tl.to("#makingGreenTea", {
        display: "none",
    }, "-+1")
    tl.to("#makingGreenTea2", {
        display: "none",
    })
    tl.to("#gameMushroom", {
        display: 'block',
        ease: "easeIn",
        duration: 8,
        y: -350,
    })
    tl.to('#title', {
        display: "block",
        backgroundSize: "50% auto",
        x: 150,
    }, "-=1")
    tl.to("#start", {
        display: 'block',
        opacity: 1,
        duration: 0.5,
        x: -10,
    })
}

function whiteTea() {
    let movingBg = document.createElement("div");
    document.getElementById("game-Container").appendChild(movingBg);
    movingBg.setAttribute('id', 'movingBg')

    let teaMush = document.createElement("div");
    document.getElementById("game-Container").appendChild(teaMush);
    teaMush.setAttribute('id', 'teaMush')

    let makingWhiteTea = document.createElement("div");
    document.getElementById("game-Container").appendChild(makingWhiteTea);
    makingWhiteTea.setAttribute('id', 'makingWhiteTea')

    let makingWhiteTea2 = document.createElement("div");
    document.getElementById("game-Container").appendChild(makingWhiteTea2);
    makingWhiteTea2.setAttribute('id', 'makingWhiteTea2')

    document.getElementById("start").innerHTML = "Please enjoy your white tea,<br>do you want another one?";
    document.getElementById("start").style.textAlign = "center";
    document.getElementById("start").style.left = "210px";
    document.getElementById("start").style.top = "300px";

    let tl = gsap.timeline();
    tl.to(".gifBg", 5, {
        display: "block",
        background: "url(/images/get_teaWater.gif) no-repeat",
    })
    tl.to(".gifBg", 1, {
        display: "none",
    })
    tl.to("#teaMush", {
        display: "block",
        duration: 3,
        ease: "steps(5)",
        x: -850,
    })
    tl.to("#teaMush", {
        display: "none",
    })
    tl.to("#makingWhiteTea", {
        duration: 6.3,
        display: "block",
    })
    tl.to("#makingWhiteTea2", {
        display: "block",
        duration: 8,
    })
    tl.to("#makingWhiteTea", {
        display: "none",
    }, "-+1")
    tl.to("#makingWhiteTea2", {
        display: "none",
    })
    tl.to("#gameMushroom", {
        display: 'block',
        ease: "easeIn",
        duration: 8,
        y: -350,
    })
    tl.to('#title', {
        display: "block",
        backgroundSize: "50% auto",
        x: 150,
    }, "-=1")
    tl.to("#start", {
        display: 'block',
        opacity: 1,
        duration: 0.5,
        x: -10,
    })
}

function herbalTea() {
    let movingBg = document.createElement("div");
    document.getElementById("game-Container").appendChild(movingBg);
    movingBg.setAttribute('id', 'movingBg')

    let teaMush = document.createElement("div");
    document.getElementById("game-Container").appendChild(teaMush);
    teaMush.setAttribute('id', 'teaMush')

    let makingHerbalTea = document.createElement("div");
    document.getElementById("game-Container").appendChild(makingHerbalTea);
    makingHerbalTea.setAttribute('id', 'makingHerbalTea')

    let makingHerbalTea2 = document.createElement("div");
    document.getElementById("game-Container").appendChild(makingHerbalTea2);
    makingHerbalTea2.setAttribute('id', 'makingHerbalTea2')

    document.getElementById("start").innerHTML = "Please enjoy your herbal tea,<br>do you want another one?";
    document.getElementById("start").style.textAlign = "center";
    document.getElementById("start").style.left = "210px";
    document.getElementById("start").style.top = "300px";

    let tl = gsap.timeline();
    tl.to(".gifBg", 5, {
        display: "block",
        background: "url(/images/get_teaWater.gif) no-repeat",
    })
    tl.to(".gifBg", 1, {
        display: "none",
    })
    tl.to("#teaMush", {
        display: "block",
        duration: 3,
        ease: "steps(5)",
        x: -850,
    })
    tl.to("#teaMush", {
        display: "none",
    })
    tl.to("#makingHerbalTea", {
        duration: 6.3,
        display: "block",
    })
    tl.to("#makingHerbalTea2", {
        display: "block",
        duration: 8,
    })
    tl.to("#makingHerbalTea", {
        display: "none",
    }, "-=1")
    tl.to("#makingHerbalTea2", {
        display: "none",
    })
    tl.to("#gameMushroom", {
        display: 'block',
        ease: "easeIn",
        duration: 8,
        y: -350,
    })
    tl.to('#title', {
        display: "block",
        backgroundSize: "50% auto",
        x: 150,
    }, "-=1")
    tl.to("#start", {
        display: 'block',
        opacity: 1,
        duration: 0.5,
        x: -10,
    })
}


//roadTwo 2-1
function roadTwo() {
    txt = "Thank you. I designed it by myself.\nWould you like to see the progress?";
    let text1 = document.getElementById("conversationText1");
    let text2 = document.getElementById("conversationText2");

    text1.onclick = function () {
        showProgress()
    };
    text2.onclick = function () {
        offerTea()
    };
    document.getElementById("conversationText1").innerHTML = "o Yes, please.";
    document.getElementById("conversationText2").innerHTML = "o No, thank you.";
    document.getElementById("conversationText3").style.display = 'none';
    // reset the index
    i = 0;
    typeWriter();
}

//roadTwo 2a-1
function showProgress() {
    txt = "I'm sorry, this is sadly still under construction.\nWould you like a cup of tea instead?";
    let text1 = document.getElementById("conversationText1");
    let text2 = document.getElementById("conversationText2");

    text1.onclick = function () {
        offerTea()
    };
    text2.onclick = function () {
        nope()
    };
    // reset the index
    i = 0;
    typeWriter();
}

//roadTwo 2b-1
function offerTea() {
    txt = "Can I offer you a cup of tea then?";
    let text1 = document.getElementById("conversationText1");
    let text2 = document.getElementById("conversationText2");

    text1.onclick = function () {
        roadOne()
    };
    text2.onclick = function () {
        nope()
    };
    document.getElementById("conversationText1").innerHTML = "Yes, please.";
    document.getElementById("conversationText2").innerHTML = "No, thank you.";
    // reset the index
    i = 0;
    typeWriter();
}

//roadThree 3
function roadThree() {
    txt = "I'm fine, thank you. \nHow are you?";
    let text1 = document.getElementById("conversationText1");
    let text2 = document.getElementById("conversationText2");

    text1.onclick = function () {
        fine()
    };
    text2.onclick = function () {
        notSoGood()
    };
    document.getElementById("conversationText1").innerHTML = "o I'm fine, thank you.";
    document.getElementById("conversationText2").innerHTML = "o I'm not doing well...";
    document.getElementById("conversationText3").style.display = 'none';
    console.log("showing progress")
    // reset the index
    i = 0;
    typeWriter();
}

//roadThree 3a-1
function fine() {
    txt = "Care to tell me your fine day?";
    let text1 = document.getElementById("conversationText1");
    let text2 = document.getElementById("conversationText2");

    text1.onclick = function () {
        goodType()
    };
    text2.onclick = function () {
        offerTea()
    };
    document.getElementById("conversationText1").innerHTML = "Yes, sure!";
    document.getElementById("conversationText2").innerHTML = "No, thank you.";
    console.log("cup of tea?")
    // reset the index
    i = 0;
    typeWriter();
}

//roadThree 3a-2
function goodType() {
    txt = "Please type here your story";
    let text1 = document.getElementById("conversationText1");
    text1.classList.add('lower')
    document.getElementById("conversationText2").style.display = 'none';

    let input = document.createElement("textarea");
    input.type = "text";
    document.getElementById("conversationBox").appendChild(input);
    input.setAttribute('id', 'inputbox')

    text1.onclick = function () {
        goodStory()
    };

    document.getElementById("conversationText1").innerHTML = "So what do you think MushMush?";

    // reset the index
    i = 0;
    typeWriter();
}

//roadThree 3a-3
function goodStory() {
    txt = "We should celebrate it with a nice cup of tea!";
    let text1 = document.getElementById("conversationText1");
    let text2 = document.getElementById("conversationText2");
    let input = document.getElementById("inputbox");

    input.remove()
    document.getElementById("conversationText2").style.display = "block";
    text1.classList.remove('lower')

    text1.onclick = function () {
        roadOne()
    };
    text2.onclick = function () {
        nope()
    };
    document.getElementById("conversationText1").innerHTML = "Yes, definitely!";
    document.getElementById("conversationText2").innerHTML = "No, thank you.";
    console.log("cup of tea?")
    // reset the index
    i = 0;
    typeWriter();
}

//roadThree 3b-1
function notSoGood() {
    txt = "Why not, my dear friend?\nI will not tell anyone due to my short term memory";
    let text1 = document.getElementById("conversationText1");
    let text2 = document.getElementById("conversationText2");

    text1.onclick = function () {
        badType()
    };
    text2.onclick = function () {
        offerTea()
    };
    document.getElementById("conversationText1").innerHTML = "Well...";
    document.getElementById("conversationText2").innerHTML = "I, rather not";
    // reset the index
    i = 0;
    typeWriter();
}

//roadThree 3b-2
function badType() {
    txt = "Please type here your story";
    let text1 = document.getElementById("conversationText1");
    text1.classList.add('lower')
    document.getElementById("conversationText2").style.display = 'none';

    let input = document.createElement("textarea");
    input.type = "text";
    document.getElementById("conversationBox").appendChild(input);
    input.setAttribute('id', 'inputbox')

    text1.onclick = function () {
        badStory()
    };

    document.getElementById("conversationText1").innerHTML = "So what do you think MushMush?";
    // reset the index
    i = 0;
    typeWriter();
}

//roadThree 3b-3
function badStory() {
    txt = "I'm sorry you're going through this. I'm here for you when you need me. Can I offer you some comfort tea?";
    let text1 = document.getElementById("conversationText1");
    let text2 = document.getElementById("conversationText2");
    let input = document.getElementById("inputbox");

    input.remove()
    document.getElementById("conversationText2").style.display = "block";
    text1.classList.remove('lower')

    text1.onclick = function () {
        roadOne()
    };
    text2.onclick = function () {
        nope()
    };

    document.getElementById("conversationText1").innerHTML = "Yes, thank you.";
    document.getElementById("conversationText2").innerHTML = "No, thank you.";
    // reset the index
    i = 0;
    typeWriter();
}

function nope() {
    document.getElementById("conversationBox").style.display = "none";
    document.getElementById("conversationText1").remove()
    document.getElementById("conversationText2").remove()
    document.getElementById("conversationText3").remove()

    let movingBg = document.createElement("div");
    document.getElementById("game-Container").appendChild(movingBg);
    movingBg.setAttribute('id', 'movingBg')

    document.getElementById("start").innerHTML = "Feel free to stay here,<br>if you need me just talk to me.";
    document.getElementById("start").style.textAlign = "center";
    document.getElementById("start").style.left = "180px";
    document.getElementById("start").style.top = "300px";

    let tl = gsap.timeline();
    tl.to("#gameMushroom", {
        display: 'block',
        ease: "easeIn",
        duration: 8,
        y: -350,
    })
    tl.to('#title', {
        display: "block",
        backgroundSize: "50% auto",
        x: 150,
    }, "-=1")
    tl.to("#start", {
        display: 'block',
        opacity: 1,
        duration: 0.5,
        x: -10,
    })
}