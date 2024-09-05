document.addEventListener('DOMContentLoaded', function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
});
function loading (){
    const tl = gsap.timeline();

    tl.to("#yellow",{
        top:'-100%',
        delay:0.2,
        duration:1,
        ease:'expo.out'
    })
    tl.from("#yellowAgain",{
        top:'100%',
        delay:0.6,
        duration:0.5,
        ease:'expo.out'
    },'anim')
    tl.to('#loader h1',{
        color:"black",
        delay:0.1,
        duration:0.5
    },'anim')

    tl.to('#loader',{
        display:'none',
    })
}
loading();
var elem = document.querySelectorAll(".elem");
var page2 = document.querySelector('#page2')

elem.forEach(
    (item)=>{
        item.addEventListener("mouseenter",() => {
            var bgimg = item.getAttribute('data-img');
            page2.style.backgroundImage = `url(${bgimg})`;
        })
    }
    )
