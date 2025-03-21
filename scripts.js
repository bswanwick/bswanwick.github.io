console.log(
  `%c
██████╗ ██╗      █████╗ ███████╗███████╗
██╔══██╗██║     ██╔══██╗╚══███╔╝██╔════╝
██████╔╝██║     ███████║  ███╔╝ █████╗  
██╔══██╗██║     ██╔══██║ ███╔╝  ██╔══╝  
██████╔╝███████╗██║  ██║███████╗███████╗
╚═════╝ ╚══════╝╚═╝  ╚═╝═══════╝╚══════╝
`,
  "color: #030a8c; font-weight: bold;"
);

gsap.registerPlugin(SlowMo);

const elRainbow = document.getElementById("rainbow");
var tlRainbow = new gsap.timeline({
  repeat: -1,
});

//#region Event Listeners
document.addEventListener("DOMContentLoaded", (_e) => animateRainbow());

window.addEventListener("resize", (_e) => handleWindowResize());

document.addEventListener("click", (e) => {
  if (e.target.id === "tile") {
    const text =
      "Congratulations to you! You have found a hidden tile. I hope you keep looking for more.  They don't all look the same. I have hidden several of them around the site. Good luck unlocking and finding them all! If you do find all of them, I promise that you shall be rewarded. Let the games begin and happy gunting!";
    say(text);
  } else {
    var tl = new gsap.timeline();
    tl.to("#tile", {
      rotation: "+=360",
    });
  }
});
//#endregion Event Listeners

//#region Functions
// This function makes the browser speak via the Speech Synth API
function say(message) {
  const utterance = new SpeechSynthesisUtterance(message);
  const voices = speechSynthesis.getVoices(),
    l = voices.length;
  if (l > 1) {
    utterance.voice = voices[(Math.random() * l) | 0];
  }
  utterance.rate = 1.1;
  speechSynthesis.speak(utterance);
}

// This function animates the rainbow background on #rainbow element
function animateRainbow() {
  tlRainbow.clear().invalidate();
  tlRainbow.fromTo(
    "#rainbow",
    {
      backgroundPosition: 0,
    },
    {
      backgroundPosition: `${parseInt(
        elRainbow.getBoundingClientRect().width
      )}px 0px`,
      ease: Linear.easeNone,
      duration: 3,
    }
  );
}

const handleWindowResize = _.throttle(animateRainbow, 300, { trailing: true });
//#endregion Functions
