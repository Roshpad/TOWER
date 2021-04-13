class YellowBox extends box{
    constructor(x,y){
        super(x,y,20,30);
    }
    
    display(){
        Fill(242,217,3);
        super.display();
    }
    }