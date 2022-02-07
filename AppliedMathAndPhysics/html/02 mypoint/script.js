const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];
let colors = ["magenta","green","black","purple","pink"]

animate();

function animate(){
    requestAnimationFrame(animate)
    context.clearRect(0,0,width,height)
    if(Math.random() < 0.1){
        let pointRnd = getRandomInt(0,colors.length);
        let point = new Point(getRandomInt(0,width),getRandomInt(0,-50),getRandomInt(10,50),colors[pointRnd]);
    }
}