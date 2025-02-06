console.log(
  `%c
██████╗ ██╗      █████╗ ███████╗███████╗
██╔══██╗██║     ██╔══██╗╚══███╔╝██╔════╝
██████╔╝██║     ███████║  ███╔╝ █████╗  
██╔══██╗██║     ██╔══██║ ███╔╝  ██╔══╝  
██████╔╝███████╗██║  ██║███████╗███████╗
╚═════╝ ╚══════╝╚═╝  ╚═╝═══════╝╚══════╝
`,
  "color: #2978a0; font-weight: bold;"
);
console.log("...was here!");
console.warn("This is a hobby site. Please don't take it too seriously! 😅");
console.log(
  "My aim was to recreate a sense of nostalgia from the 90s. In the early days of the internet, websites were a lot more fun to explore.  Platforms like Angelfire and GeoCities allowed anyone to publish their own website.  And in those early days, the creativity and personal pride put into every site was just so inspiring!  Now, I'm the webmaster. This site is a faithful ode to those early pioneers. Happy gunting! 🌈"
);

function say(message) {
  const utterance = new SpeechSynthesisUtterance(message);
  const voices = speechSynthesis.getVoices(),
    l = voices.length;
  if (l > 1) {
    utterance.voice = voices[(Math.random() * l) | 0];
  }
  utterance.rate = 1.2;
  speechSynthesis.speak(utterance);
}

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(SlowMo);

  // gsap code here!

  const elRainbow = document.getElementById("rainbow");

  var tl = new TimelineMax({ repeat: -1 });
  tl.to("#rainbow", {
    backgroundPosition: `${elRainbow.getBoundingClientRect().width}px 0px`,
    ease: Linear.easeNone,
    duration: 3,
  });
});

document.addEventListener("click", (ev) => {
  if (ev.target.id === "tile") {
    const text =
      "Congratulations to you! You have found a hidden tile. I hope you keep looking for more. I have hidden a few more around the site. Good luck finding them all! If you find all of them, you will be rewarded. Happy gunting!";
    // alert(`${text} 🎉`);
    say(text);
  } else {
    var tl = new TimelineMax();
    tl.to("#tile", {
      rotation: "+=360",
    });
  }
});
