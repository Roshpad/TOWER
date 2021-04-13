class Projectile{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            point:pointB,
            stiffness:0.04,
            length:10,
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
    World.add(world,this.body);

    }

    release(){
        this.body.bodyA = null;

    }
    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.postion;
            var pointB = this.pointB;
            strokeWeight(1);
            stroke("grey");
            Line(pointA.x,pointA.y,pointB.x,pointB.y)

        }
    }
}