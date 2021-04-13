class Platfor{
    constructor(x,y,width,height){
        var options = {
            isStatic :true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        world.add(world,this.body);
    }
    display(){
        var pos = this.body.postion;
        Fill(64, 45, 38);
        rectMode(CENTRE);
        rect(pos.x,pos.y,this.width,this.height);

    }
}