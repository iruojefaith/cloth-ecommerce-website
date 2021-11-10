const slider1 = document.getElementById("glide1");
if (slider1)
new Glide(slider1, {
    type: 'carousel',
    startAt: 0,
    autoplay: true,
    hoverpause: true,
    perView: 1,
    animationTimingFunc: "linear",
    animationDuration: 800,
}).mount(); 
