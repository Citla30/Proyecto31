class Particle {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.r = 10;
        this.image=loadImage("rey.png");
        this.color=color(random(0,255),random(0,255),random(0,255));
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
       
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        console.log(this.body.speed);


        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        image(this.image,0,0,30,30);
        pop();
    }

}