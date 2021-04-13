class Ball{
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.circle(x,y,radius,options);
        thia.radius = radius;
        world.add(world,this.body);

    }
    display(){
        var pos = this.body.postion;
        Fill(176, 219, 83);
        ellpiseMode(CENTRE);
        ellpise(pos.x,pos.y,this.radius);


    }

    
}