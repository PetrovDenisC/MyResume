// animation
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();

// bubble anim
const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = [
    "linear-gradient(to right top, #FDC830, #F37335)",
    "linear-gradient(to right, #CAC531, #F3F9A7)",
    "linear-gradient(to top,  #000C40,#F0F2F0)",
    "linear-gradient(to right, #CAC531, #F3F9A7)"
];

const options = {
    threshold: 0.3
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        // console.log('className=', className);
        const activeAnchor = document.querySelector(`[data-page=${className}]`)
        // console.log('activeAnchor=', activeAnchor);
        const gradientIndex = entry.target.getAttribute("data-index");
        // console.log('gradientIndex=', gradientIndex);
        const coords = activeAnchor.getBoundingClientRect();
        // console.log('coords=',coords);
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left,
        };
        // console.log(directions);
        if (entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty("top", `${directions.top}px`);
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.setProperty("height", `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex]
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});


// canvas

// function (){

//     // var canvas=document.createElement('canvas'),
//     const container = document.querySelectorAll('container');
//     const canvas = document.querySelector(".canvas");
//     ctx = canvas.getContext('2d'),

//     w = canvas.width=innerWidth,
//     h = canvas.height=innerHeight,

//     // создаем точки
//     dots = [],

//     // массив свойств
//     prop = {
//         bgColor :'rgba(17, 17, 19, 1)',
//         dotColor:'rgba(255, 40, 40, 1)',
//         dotRad  : 3,
//         dotCount: 60,
//     };
    

//     // document.querySelector('header').appendChild(canvas);
    
//     // изменение размера окна
//     window.onresize=function(){
//         w = canvas.width=innerWidth,
//         h = canvas.height=innerHeight,
//     }

//     class dot{
//         constructor(){
//             this.x=Math.random()*w;
//             this.y=Math.random()*h;
//         }
//         reDrow(){
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, prop.dotRad, 0, 2*Math.PI);
//             ctx.closePath();
//             ctx.fillStyle=prop.dotColor;
//             ctx.fill();
//         }
//     }


//     function reDrowBG(){
//         ctx.fillStyle=prop.bgColor;
//         ctx.fillRect(0, 0, w, h)
//     }

//     function reDrowDots(){
//         for(var i in dots){
//             dots[i].reDrow;
//         }
//     }

//     function loop(){
//         reDrowBG();
//         reDrowDots();
//         requestAnimationFrame(loop);
//     }

//     function init(){
//         for(var i=0; i<dotCount; i++){
//             dots.push(new dot);
//         }
//         loop();
//     }




//     init()




// }();