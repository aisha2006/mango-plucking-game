class Stone {
    constructor(x, y, width, height){
        var options = {
            isStatic:true,
            friction: 1.0,
            density: 1
        }

        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width=width;
        this.height=height;
        this.image=loadImage("images/project/stone.png");
        World.add(world, this.body);
        
    }

    display(){
        push();
        fill("white");
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}