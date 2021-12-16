class Tablero {
    constructor() {
        var options = {
            isStatic:true
        }
        
        this.image=loadImage("piezas.png");
        this.body = Bodies.rectangle(400, 400,50,100, options);
        World.add(world, this.body);
       
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        imageMode(CENTER);
        image(this.image,0,0,800,850);
        pop();
        
    }

};