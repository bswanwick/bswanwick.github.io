console.log(
  `%c
██████╗ ██╗      █████╗ ███████╗███████╗
██╔══██╗██║     ██╔══██╗╚══███╔╝██╔════╝
██████╔╝██║     ███████║  ███╔╝ █████╗  
██╔══██╗██║     ██╔══██║ ███╔╝  ██╔══╝  
██████║ ███████╗██║  ██║███████╗███████╗
╚═════╝ ╚══════╝╚═╝  ╚═╝═══════╝╚══════╝
`,
  "color: cyan; font-weight: bold;"
);
console.log("...was here! 👩🏻‍💻");

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
