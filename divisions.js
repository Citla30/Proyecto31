class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.image=loadImage("rey2.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        image(this.image,pos.x, pos.y,this.w,this.h);
    }
};