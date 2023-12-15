var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblur")

document.addEventListener("mousemove",(mouse)=>{
    console.log(mouse)
    crsr.style.left = mouse.x + 10 +"px"
    crsr.style.top = mouse.y -10 +"px"
    cursorblur.style.left = mouse.x - 200 +"px"
    cursorblur.style.top = mouse.y - 200 +"px"
})

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach((e)=>{
    e.addEventListener("mouseenter", ()=>{
        crsr.style.scale = 3
        crsr.style.border = "1px solid #ffff"
        crsr.style.backgroundColor = "transparent"
    })

    e.addEventListener("mouseleave", ()=>{
        crsr.style.scale = 1
        crsr.style.border = "0px solid rgb(19, 168, 19)"
        crsr.style.backgroundColor = "rgb(19, 168, 19)"
    })
})


document.addEventListener("DOMContentLoaded", function() {
    // Your GSAP animations here
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();


gsap.to("#nav",{
    backgroundColor : "#000",
    height:"110px",
    duration :0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub: 1

    }
    
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger : {
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})


gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    // stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body", 
        // markers: { startColor: "red", endColor: "green" },
        start: "top 70%",
        end: "top 55%",
        scrub: 1,
        onComplete: () => {
            gsap.set("#about-us img, #about-us-in", { clearProps: "all" });
        },
    }
});


gsap.from(".card", {
    scale:0.8,
    opacity: 0,
    duration: 1,
    // stagger: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body", 
        // markers: { startColor: "pink", endColor: "blue" },
        start: "top 70%",
        end: "top 65%",
        scrub: 2,
        onComplete: () => {
            gsap.set(".card", { clearProps: "all" });
        },
       
    }
});

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3

    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3

    }
})

gsap.from("#page4 h1",{
    y:50,
    duration: 1,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3

    }
})


});
