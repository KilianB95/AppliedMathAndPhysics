const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

context.beginPath()
context.fillStyle = "yellow";
context.lineWidth = "5";
context.strokeStyle = "#000000";
context.moveTo(300,100);
context.lineTo(200,300);
context.lineTo(600,400);
context.lineTo(700,200);
context.closePath()
context.stroke();
context.fill();


context.beginPath()
context.lineWidth = "5";
context.strokeStyle = "#000000";
context.moveTo(200,300);
context.lineTo(200,500);
context.lineTo(600,600);
context.lineTo(600,400);
context.closePath()
context.stroke();

context.beginPath()
context.lineWidth = "5";
context.moveTo(600,400);
context.lineTo(700,200);
context.lineTo(800,300);
context.closePath()
context.stroke();

context.beginPath()
context.lineWidth = "5";
context.moveTo(600,400);
context.lineTo(600,600);
context.lineTo(800,500);
context.lineTo(800,300);
context.closePath()
context.stroke();