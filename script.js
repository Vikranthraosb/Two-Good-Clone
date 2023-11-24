const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),//  dont give height and width to main if youre applying this
    smooth: true // web page will scroll smoothly
});

function videocontainerAnimation(){

var videocontainer= document.querySelector(".video-container")
var playbtn = document.querySelector(".play")

videocontainer.addEventListener("mouseenter",function(){
gsap.to(playbtn,{
    scale:1,
    opacity:.8
})
})

videocontainer.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
})
})
videocontainer.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x,
        top:dets.y
})
})
}
videocontainerAnimation()

function frontPageAnimation(){
    gsap.from(".page1 h1",{
        y:300,
        x:100,
        fontSize:6,
        opacity:0,
        delay:0.5,
        duration:0.7,
        stagger:0.23
        })
        gsap.from(".page1 .video-container",{
            opacity:0,
            scale:.8,
            duration:.6,
            delay:.99
        
        })
}
frontPageAnimation()
var mainn=document.querySelector(".main");
mainn.addEventListener("mousemove",function(dets){  // This will apply to whole web page
gsap.to(".cursor",{
    left:dets.x,
    top:dets.y,
    scale:1,
    opacity:.9
})
})
mainn.addEventListener("mouseleave",function(dets){  // This will apply to whole web page
    gsap.to(".cursor",{
        left:dets.x,
        top:dets.y,
        scale:0,
        opacity:0
    })
    })