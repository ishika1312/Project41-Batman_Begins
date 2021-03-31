class Drop{
    constructor(x, y){
        var options={
            density:1.0,
            frictio:0.1,
            restitution:0.8
        }
        this.body = Bodies.circle(x, y, 7, options);
        this.color = color("blue");
        World.add(world, this.body);
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0, 600), y:random(0, 200)});
        }
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 7, 7);
        pop();
    }
}