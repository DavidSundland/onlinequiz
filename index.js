const QUESTIONS =
[
    {
        picture: "http://www.districtconcerts.com/wp-content/uploads/2017/10/Trump.jpg",
        picAlt: "Donald Trump with view of hand obstructed.",
        question: 'How many fingers and/or thumbs is this "man" holding up?',
        answers: ["Three", "Five", "Two", "One", "Six", "Four"],
        rightAnswer: 3,
        wrongResponse: "So sad!  You got the answer wrong.  He is holding up one finger.  (We won't say <i>which</i> &nbsp;finger.)",
        wrongPicture: "https://s3.amazonaws.com/webassets.ticketmob.com/LS/images/ShowPosters/2A77E2F5-E82E-8FD0-A09BED0280322820.jpg",
        wrongPicAlt: "Gilbert Gottfried shrugging.",
        rightResponse: "You're great.  The best!  (Let's not discuss <i>which</i> &nbsp;finger he is holding up.)",
        rightPicture: "http://www.trbimg.com/img-558346b6/turbine/la-ca-gilbert-gottfried-podcast-20150621",
        rightPicAlt: "Gilbert Gottfried pointing his finger in congratulatory fashion."
    },
    {
        picture: "http://i2.wp.com/www.anamericanineurope.com/wp-content/uploads/2016/10/IMG_7653.jpg",
        picAlt: "Sculpture by Gustav Vigeland of a huge pile of naked babies.",
        question: 'What is the significance of this sculpture?',
        answers: ["It commemmorates the trial run of 'Newborn Rugby.'", "It is based on archival photos of the Great Pacifier Shortage of 1924.", "My dog did not poop nearby.", "It was paid for with your tax dollars.", "It has no significance."],
        rightAnswer: 2,
        wrongResponse: "Tsk, tsk.  Some psychic you are!  This baby pile represents just a small portion of nakedidity in Oslo's Vigeland Park.  Oslo was one of very few European excursions that I took without my dog, so she did not have a chance to poop here.",
        wrongPicture: "http://i0.wp.com/www.anamericanineurope.com/wp-content/uploads/2016/10/IMG_7635.jpg",
        wrongPicAlt: "Photo of Vigeland Park, showing many of the sculptures of naked people.  We're so sorry that you can't see this.",
        rightResponse: "Well done!  This baby pile represents just a small portion of nakedidity in Oslo's Vigeland Park.  Oslo was one of very few European excursions that I took without my dog, so she did not have a chance to poop here.",
        rightPicture: "http://i0.wp.com/www.anamericanineurope.com/wp-content/uploads/2016/10/IMG_7635.jpg",
        rightPicAlt: "Photo of Vigeland Park, showing many of the sculptures of naked people.  We're so sorry that you can't see this."
    },
    {
        picture: "",
        picAlt: "",
        question: 'Suburban is to urban as...',
        answers: ["...substandard is to standard.", "...being buried alive is to dying during passionate love-making.",  "...standing in line for a roller coaster is to actually riding the roller coaster.", "...plain rice cakes are to deep dish pizza.", "All of the above."],
        rightAnswer: 4,
        wrongResponse: "Partial credit!  Or, in other words...  ALL of the answers are correct, so... your response is <b>WRONG!!!</b>",
        wrongPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_CBmXXy-Enh7yAoe2p2vCTOljfJbspHW4V0_EBQZ5Y_H7sG0Aw",
        wrongPicAlt: "Photo of Doc Brown, from Back to the Future, looking aghast.",
        rightResponse: "OK, this one was way too obvious, but you've earned a point nonetheless.",
        rightPicture: "http://vignette1.wikia.nocookie.net/bttf/images/6/69/Newface.jpg/revision/latest?cb=20080321000009",
        rightPicAlt: "Photo of Doc Brown, from Back to the Future, looking pleased."
    },
    {
        picture: "",
        picAlt: "",
        question: 'Which is the biggest waste of time?',
        answers: ["Playing golf.", "Watching golf.",  "Taking on-line quizzes.", "Creating on-line quizzes."],
        rightAnswer: 1,
        wrongResponse: "While all of these activities represent sloth, there is no lower form of existence than <i>watching</i> &nbsp;golf.",
        wrongPicture: "http://mtv.mtvnimages.com/crop-images/2014/10/13/beavisandbutthead.jpg?width=640&height=360&crop=true&resize=true",
        wrongPicAlt: "Beavis and Butthead, looking shocked.",
        rightResponse: "Duh.",
        rightPicture: "http://stuffiminterestedin.com/wp-content/uploads/2016/06/600full-steve-buscemi.jpg",
        rightPicAlt: "Steve Buscemi, looking pleased."
    },
    {
        picture: "",
        picAlt: "",
        question: 'Why?',
        answers: ["Why not?", "42",  "Beer", "Pizza", "Jamie Dorman", "Emilia Clarke", "Kermit the Frog"],
        rightAnswer: 2,
        wrongResponse: "WRONG!!!  How could the answer <i>not</i> &nbsp;be beer?!!",
        wrongPicture: "http://www.simpsoncrazy.com/content/pictures/homer/HomerSimpson2.gif",
        wrongPicAlt: "Homer Simpson, holding his head in anguish.",
        rightResponse: "Duh.  (And bottoms up!)",
        rightPicture: "https://slm-assets3.secondlife.com/assets/6786681/lightbox/Homer.jpg?1355349046",
        rightPicAlt: "Homer Simpson, holding his hands up in triumph as he shouts 'woo-hoo!'"
    },
    {
        picture: "",
        picAlt: "",
        question: 'If I got a tattoo, where would I put it?',
        answers: ["Armpit",  "Forearm", "Forehead", "Chest", "Nether Regions", "Ankle", "Foot", "Hand", "Bum", "Bicep"],
        rightAnswer: 6,
        wrongResponse: "Sorry - I would want a location that nobody would ever see unless I wanted them to, but that could be shared in public without being arrested.",
        wrongPicture: "http://www.districtconcerts.com/wp-content/uploads/2017/10/Feet.png",
        wrongPicAlt: "Photo of the bottoms of two feet. The tattoos on the right foot include 'Do not put in mouth', 'This end down', and 'Right.'  The tattoos on the left foot include a bar code, 'Made in the U.S.A.', and 'Left'.",
        rightResponse: "Yes!  Specifically - the bottom of the foot - a location that nobody would ever see unless I wanted them to, but that could be shared in public without being arrested.",
        rightPicture: "http://www.districtconcerts.com/wp-content/uploads/2017/10/Feet.png",
        rightPicAlt: "Photo of the bottoms of two feet. The tattoos on the right foot include 'Do not put in mouth', 'This end down', and 'Right.'  The tattoos on the left foot include a bar code, 'Made in the U.S.A.', and 'Left'."
    },
    {
        picture: "",
        picAlt: "",
        question: 'What card am I picturing?',
        answers: ["King of Hearts", "Two of Hearts",  "Eight of Clubs", "Two of Spades", "Wild Draw 4", "Get Out of Jail Free"],
        rightAnswer: 3,
        wrongResponse: "Sorry!  Once one sees a card showing two cats playing ping-pong, how can one <i>not</i> &nbsp;picture that?",
        wrongPicture: "https://i.pinimg.com/564x/2c/69/ce/2c69ce15421424fb3b2345bfd984d4d9.jpg",
        wrongPicAlt: "Playing card with two cats playing table tennis, holding paddles that look like spades.",
        rightResponse: "Correct!  Once one sees a card showing two cats playing ping-pong, how can one <i>not</i> &nbsp;picture that?",
        rightPicture: "https://i.pinimg.com/564x/2c/69/ce/2c69ce15421424fb3b2345bfd984d4d9.jpg",
        rightPicAlt: "Playing card with two cats playing table tennis, holding paddles that look like spades."
    },
    {
        picture: "",
        picAlt: "",
        question: 'What color am I picturing?',
        answers: ["Fuzzy Wuzzy Brown", "Atomic Tangerine",  "Banana Mania", "Screamin Green", "Razzle Dazzle Rose"],
        rightAnswer: 2,
        wrongResponse: "<b>Really?</b>  &nbsp;When one of the choices is &nbsp;<span style = 'color: #FAE7B5; background-color: black'> 'banana' </span>, &nbsp;you don't grab it?",
        wrongPicture: "http://cdn.smosh.com/sites/default/files/2014/11/crayon-color-mania.jpg",
        wrongPicAlt: "Picture of 'banana mania' Crayola crayon",
        rightResponse: "Of course!  How can one not choose a color with the word &nbsp;<span style = 'color: #FAE7B5; background-color: black'> 'banana' </span> &nbsp;in it?",
        rightPicture: "http://cdn.smosh.com/sites/default/files/2014/11/crayon-color-mania.jpg",
        rightPicAlt: "Picture of 'banana mania' Crayola crayon"
    },
    {
        picture: "",
        picAlt: "",
        question: 'How much wood would a woodchuck upchuck if a woodchuck drank too much wood grain alcohol?',
        answers: ["It depends on the hardness of the wood and the brand of woodchuck", "42",  "Woodchucks are not stupid enough to drink wood grain alcohol - have you ever seen a woodchuck in a frat?", "0.2152 cords"],
        rightAnswer: 0,
        wrongResponse: "For shame!  You should know that softer wood yields larger quantities of upchuck (but less painful splinters), and that Acme™ woodchucks have legendary upchuck aversion capabilities.",
        wrongPicture: "https://cbsnews1.cbsistatic.com/hub/i/2014/11/19/cf717e45-c4d4-40a7-9905-eff34b77b189/groundhog1.jpg",
        wrongPicAlt: "Picture of angry woodchuck",
        rightResponse: "Well done!  The softer the wood, the larger the quantity of upchuck, but the less painful the splinters. Also, Acme™ woodchucks are well known for their upchuck aversion capabilities.  Invest in an Acme™ woodchuck today!",
        rightPicture: "http://www.sepeb.com/woodchuck/woodchuck-013.jpg",
        rightPicAlt: "Picture of happy-looking woodchuck"
    },
    {
        picture: "",
        picAlt: "",
        question: 'Which is the most annoying phrase?',
        answers: ["Using the term 'shocked' or 'stunned' EVERY TIME a favored team loses or a large lead is squandered. Are athletes so stupid that they are completely surprised by something that happens to some team, somewhere, pretty much every damned day?", "You're so vain, you probably think this song is about you.",  "If they don't like _____, they can move to another country!", "You can't make this stuff up!"],
        rightAnswer: 3,
        wrongResponse: "Sorry!  Every one of these is incredibly annoying, but I can't imagine a notion that is more irritating than suggesting that there is a limit to human imagination.",
        wrongPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Gnome-face-angry.svg/2000px-Gnome-face-angry.svg.png?width=196",
        wrongPicAlt: "Angry face emoticon",
        rightResponse: "Absolutely.  Every one of these is incredibly annoying, but I can't imagine a notion that is more irritating than suggesting that there is a limit to human imagination.",
        rightPicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Gnome-face-angry.svg/2000px-Gnome-face-angry.svg.png?width=196",
        rightPicAlt: "Angry face emoticon"
    },
    {
        picture: "",
        picAlt: "",
        question: "What is humanity's most aggravating endeavor?",
        answers: ["Trying to properly position elements using CSS."],
        rightAnswer: 0,
        wrongResponse: "Not sure how you got a wrong answer when there was only one option.  What the what?!!",
        wrongPicture: "http://critterbabies.com/wp-content/gallery/kittens/cats-animals-kittens-background-us.jpg",
        wrongPicAlt: "Photo of an incredibly cute kitten.",
        rightResponse: "OK, OK, there are obviously worse things than positioning crap on websites.  But in 20 years of CSS, nobody decided that it would be beneficial to have a 'center' value for elements??!!!!<br><br>(PS - yeah, the image has nothing to do with the question or answer, but it seemed like a good time to toss a kitten onto the screen.)",
        rightPicture: "http://critterbabies.com/wp-content/gallery/kittens/cats-animals-kittens-background-us.jpg",
        rightPicAlt: "Photo of an incredibly cute kitten."
    }
];
const questionArray = [];
let tallyYo = 0;
let questionNumber = 0;

$(function(){
   
  $("#tempButt").click(function(){
    $("#rightOrWrong").toggleClass("here");
  })
  
})

function generateRandomNumberArray()  // Randomizes questions asked (if enough questions available) and order in which they are asked
{
    let maxNumber = 10;
    let numberOfQuestions = QUESTIONS.length;
    if (maxNumber > numberOfQuestions) // In case quiz questions are added in future, cap quiz length at 10 questions.
    {
        maxNumber = QUESTIONS.length;
    }
    let questionsAsked = [];
    let num;
    let numbers = [];
    while (numbers.length < maxNumber)
    {
        num = Math.floor((Math.random() * numberOfQuestions));  // NOTE - if quiz has more than 10 questions, maxNumber and numberOfQuestions will not be equal...
        if (numbers.indexOf(num) === -1)
        {
            numbers.push(num);
        }
    }
    return numbers;
}

function generateArray()
{
    let questionOrder = generateRandomNumberArray();
    for (i = 0; i < questionOrder.length; i++)
    {
        questionArray.push(QUESTIONS[questionOrder[i]]);  // Questions are placed into new array in random order.  Original array is not altered.
    }
    return questionArray
}

function continueClicked()
{
    $('#rightOrWrong').on('click', '#nextQuestion', event =>
    {
        $(".imageHolder").removeClass("imageShadow");
        $(".imageHolder").css("background-image", "");  // Clear question photo
        if (questionNumber === questionArray.length)  // Got to last question!
        {
            if (tallyYo === questionArray.length)  // Quiz taker got every answer correct
            {
                location.href = "QuizConclusionPerfect.html";
            }
            else
            {
                location.href = "QuizConclusionNotPerfect.html?numRight=" + tallyYo + "numQuest-" + questionArray.length;  // Pass # of correct answers & total # of questions to final page
            }
        }
        else
        {
            $("#rightOrWrong").toggleClass("here"); // .delay(2000).css("z-index", -1);  // Delay is added so that next line does not immediately execute
            postQuestion(questionArray, questionNumber);
            $("div#rightOrWrong").text("");
        }
    });
}

function answerSubmitted()
{
    $('form').on('click', '.submitButton', event =>
    {
        event.preventDefault();
        itemChecked = $('input[name="Question"]:checked').val();
        if (itemChecked === undefined)
        {
            alert("Ya gots ta pick sumpin' before hittin' da 'Submit' button, fool!");
            return;
        }
        let response = "";
        let picture = "";
        if(String(questionArray[questionNumber].rightAnswer) === String(itemChecked))
        {
            response = questionArray[questionNumber].rightResponse;
            picture = questionArray[questionNumber].rightPicture;
            alt = questionArray[questionNumber].rightPicAlt;
            tallyYo++;
        }
        else
        {
            response = questionArray[questionNumber].wrongResponse;
            picture = questionArray[questionNumber].wrongPicture;
            alt = questionArray[questionNumber].wrongPicAlt;
        }
        $("div#rightOrWrong").text("");  // Clear any existing text
        $("div#rightOrWrong").html(`${response}<br><br><img src="${picture}" alt="${alt}"><br><button id = "nextQuestion" role="button">Continue</button>`);
        $("#rightOrWrong").toggleClass("here");
        questionNumber++;
    });
}

function postQuestion()
{
    $("h3").text(`Question ${questionNumber + 1} of ${questionArray.length}`);
    $("h4").text(questionArray[questionNumber].question);
    $("form").text(""); // Clear existing text (if any)
    if (questionArray[questionNumber].picture !== "")  // If there actually is a photo URL...
    {
        website = `${questionArray[questionNumber].picture}`;
        console.log("In picture thingie, image URL = ", website);
        document.getElementsByClassName('imageHolder')[0].style.backgroundImage = 'url(' + website + ')';
        document.getElementsByClassName('imageHolder')[0].setAttribute("title", questionArray[questionNumber].picAlt); // Set title to provide alternative text in case background image can't be viewed
        $(".imageHolder").addClass("imageShadow")
    }
    for (i = 0; i < questionArray[questionNumber].answers.length; i++)
    {
        let ariaNumber=i+1;  // Number to label answers for screen readers
        $("form").append(`<input type = "radio" name = "Question" value = "${i}" aria-label="Answer ${ariaNumber}" required /><label for="Question"> ${questionArray[questionNumber].answers[i]}</label>`);
        console.log(questionArray[questionNumber].answers[i].length);
    }
    $("form").append(`<br><input type="submit" class="submitButton" value="Submit" role="button">`);
}  

function ESPbuy()
{
    alert("We're sorry.  An error occurred.  We did NOT see that coming.");
}

function getNumRight()
{
    let currentURL = window.location.href; // get URL of page; # of right answers and # of questions are embedded
    let numRightArray = /\=([0-9])/.exec(currentURL);  // get array that includes # of right answers  (passed as '=NUM')
    let numQuestArray = /\-([0-9]+)/.exec(currentURL);  // get array that includes # of questions  (passed as '-NUM')
    if (numRightArray !== null)  // If get null, NOT on right page (or info somehow not properly passed)
    {
        numRight = numRightArray[1];
        numQuest = numQuestArray[1];
        $("h1").text(`You Answered ${numRight} Out of ${numQuest} Correctly`);
    }
}

let whichPage = window.location.href;  // Multiple pages are sharing the same JavaScript file.  To avoid errors, find which page we're on, and only run pertinent functions
let pageArray = /\/([a-zA-Z]+)\.html/.exec(whichPage);  // Use RegEx to extract portion of URL that pertains to filename
if (pageArray[1] === "QuizPage")  // Most of the JavaScript is only for the quiz pages...
{
    generateArray();
    postQuestion();
    continueClicked();
    answerSubmitted();
}
else  // The final page uses only one JavaScript function
{
    getNumRight();
}
