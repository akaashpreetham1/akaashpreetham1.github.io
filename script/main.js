var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;
var together = new Date();
together.setFullYear(2016, 8, 5);
together.setHours(16);
together.setMinutes(30);
together.setSeconds(0);
together.setMilliseconds(0);

// function heartDraw(){
//   if (!document.createElement('canvas').getContext) {

//     console.log("In If Block")

//     var msg = document.createElement("div");
//     msg.id = "errorMsg";
//     msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+"; 
//     document.body.appendChild(msg);
//     $("#code").css("display", "none")
//     $("#copyright").css("position", "absolute");
//     $("#copyright").css("bottom", "10px");
//     document.execCommand("stop");
//   } else {
    
//     console.log("In Else Block")
    
//     setTimeout(function () {
//       console.log("I am here before startHeartAnimation")
//       startHeartAnimation();
//     }, 500);

//     // timeElapse(together);
//     // setInterval(function () {
//     //   timeElapse(together);
//     // }, 500);

//     // adjustCodePosition();
//     // $("#code").typewriter();
//   }
// }


function playAudio(){
  const audio = document.getElementById("audioplayer");
  console.log("Audio muted? "+audio.muted);
  // Simulate a user interaction (e.g., a slight delay)
  setTimeout(() => {
    audio.muted = false;
    console.log("Audio muted? "+audio.muted);
    audio.pause();
    console.log("audio is paused? " +audio.paused)
    setTimeout(() => {
      audio.play();
      console.log("audio is paused? "+audio.paused);
    },200);
  }, 200); // Adjust the delay as needed 
}


// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from("body", 8, {
      backgroundColor: "#000000"
    })
    .to("body", 3, {
      backgroundColor: "#FFF8E1"
    })
    .from(".zero", 3, {
      opacity: 1,
    })
    .add(() => {
          try {
            console.log("I am here!");
            startHeartAnimation();
            console.log("I am here again!");
          } catch (error) {
            console.log("Error in startHeartAnimation:", error);
          }
      }, 1)
    .to(".zero", 2.8, {
      opacity: 0,
    })
    .from(".one", 1.2, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      1.2,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 3, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      3,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 3, ideaTextTrans)
    .to(".idea-3 strong", 3, {
      scale: 1.2,
      x: 10,
      backgroundColor: "#FF69B4",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .from(".fivepointfour", 3, {
      opacity: 0,
      scale: 3,
      ease: Expo.easeOut,
    })
    .to(".fivepointfour", 2.7, {
      opacity: 0,
      scale: 3,
      ease: Expo.easeOut,
    })
    //Here's the Musee du Louvre
    .from(".fivepointfive", 7, {
      opacity: 0,
      ease: Expo.easeOut,
      // y: 0,
      // scale: 0.7
    })
    .to(
      ".fivepointfive",
      8,
      {
        opacity: 0,
        // y: 0,
      },
      "+=10"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })  
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 1,
        repeatDelay: 1.4,
      },
      0.3
    )
    .staggerFrom(
      ".wish-hbd span",
      0.9,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.9,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    // .staggerTo(
    //   ".eight svg",
    //   1.5,
    //   {
    //     visibility: "visible",
    //     opacity: 0,
    //     scale: 80,
    //     repeat: 1,
    //     repeatDelay: 1.4,
    //   },
    //   0.3
    // )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

//Variables for months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Variable for day lists
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// HTML DOM Document Selector Method
const theBirthday = document.querySelector(".birthdayOn");
const timeLeft = document.querySelector(".timeleft");
const formatTime = document.querySelectorAll(".format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// Set the date of my birthday
const futureBirthday = new Date(2025, 0, 28, 0, 0, 0);

const year = futureBirthday.getFullYear();
const hours = futureBirthday.getHours();
const minutes = futureBirthday.getMinutes();

let month = futureBirthday.getMonth();
month = months[month];
const weekday = weekdays[futureBirthday.getDay()];
const date = futureBirthday.getDate();

let amPm = "";
if (hours > 12) {
  amPm = "pm";
} else {
  amPm = "am";
}

// Manipulate the text of .birthdayOn
//theBirthday.textContent = `Birthday on ${weekday}, ${month} ${date}, ${year} at ${hours}:${minutes} ${amPm}`;

const futureTime = futureBirthday.getTime();

// This function for get reminding time
function getRemindingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Calcualte all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // Set array values
  const values = [days, hours, minutes, seconds];

  // Manipulate every format element
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  formatTime.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    document.getElementById("countdownRemove").remove();
    playAudio();
    // console.log("Drawing heart")
    // heartDraw();
    // console.log("Drew heart")
    setTimeout(() => {
      // document.getElementById("mainDiv").remove();
      console.log("Starting animationTimeline")
      resolveFetch().then(animationTimeline());
    }, 100);
  }
}

// Countdown based on interval
let countdown = setInterval(getRemindingTime, 1000);

// Call the main function
getRemindingTime();

// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year to the span with id "currnetYear"
//document.getElementById("currentYear").textContent = currentYear;

