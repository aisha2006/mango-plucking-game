class Rope{
    constructor(bodyA, pointB){
        var options = {
            isStatic: false,
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 50
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null;
      
    }

    

    display(){

        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    attach(body){
        this.rope.bodyA = body;
      }
}