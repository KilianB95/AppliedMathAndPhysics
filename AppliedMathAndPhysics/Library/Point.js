class Point{
    constructor(x,y,radius,color,draggable){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.draggable = draggable || false;
        if(draggable){
            this.drag();
        }
    
    }

    draw(){
        let x = Math.random()*width;
        let y = Math.random()*height;

        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI)
        context.closePath();
        context.stroke();
        context.fill();
    }

    drag(){
        let dragging = false;
        addEventListener('mousedown', (e) => {
            let a = e.clientX - this.x;
            let b = e.clientY - this.y;
            let distance = Math.sqrt(a*a + b*b);

            if(distance < this.radius){
                dragging = true;
            }

            console.log(e.clientX, e.clientY, distance)
        })
        addEventListener('mousemove', (e) =>{
            if(dragging){
                this.x = e.clientX;
                this.y = e.clientY
            }
        })

        addEventListener('mouseup', () =>{
            dragging = false;
        })
    }
}