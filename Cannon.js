class Cannon{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
    }

    display(){
        // parte superior del cañon
        push();
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        pop();
    
        // parte inferior del cañon
        rect(70,20,200);
        noFill();
    }
}
