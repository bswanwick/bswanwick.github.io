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
