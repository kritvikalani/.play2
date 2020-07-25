class Paper {
    constructor(x,y,radius) {

    var options= {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
    }
    this.body= Bodies.circle(x,y,radius,options)
    this.body.radius= 140;

    this.body.image= loadImage("paper.png")
    //this.body.image.scale= 0.01;

    World.add(world,this.body)
}
display(){
    var pos= this.body.position
    imageMode(RADIUS)
    fill("pink")
    image(this.body.image, pos.x, pos.y, 40,50);
}
}
