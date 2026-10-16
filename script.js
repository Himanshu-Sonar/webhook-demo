var main=document.querySelector(".main")
var cur=document.querySelector(".cursor")
var img=document.querySelector(".img")
var text=document.querySelector(" h1")

main.addEventListener("mousemove",function(val){
    gsap.to(cur,{
        x:val.x,
        y:val.y,
        duration:0.8,
        // ease: "elastic.out(1,0.4)",
    })
})

text.addEventListener("mouseenter",function(){
    gsap.to(cur,{
        scale:6,
        backgroundColor:"blue",
        
        opacity:0.8,
    })
})
text.addEventListener("mouseleave",function(){
    gsap.to(cur,{
        scale:1,
        backgroundColor:"black",
        
        opacity:0.8,
    })
})


img.addEventListener("mouseenter",function(){
    gsap.to(cur,{
        scale:20,
        backgroundColor:"#588157",
        opacity:0.8,
    })
})

img.addEventListener("mouseleave",function(){
    gsap.to(cur,{
        scale:1,
        backgroundColor:"#000",
    })
})
