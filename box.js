class Box {
    constructor(x,y,width,height) {

        var options= {
            isStatic: true
        }

        this.body1= Bodies.rectangle(690, 650, 100, 20, options);
	    this.body2= Bodies.rectangle(620, 600, 20, 110, options);
        this.body3= Bodies.rectangle(740,600,20,110, options);

        //this.body= Bodies.rectangle(x,y,width,height, options);
        this.width=  width;
        this.height= height;
        this.x= x;
        this.y= y;

        this.image= loadImage("dustbingreen.png")

        World.add(world, this.body1);
        World.add(world, this.body2);
        World.add(world, this.body3);
    }

    display() {
        //var pos= this.body.position;
        imageMode(CENTER);
        fill("white");
        image(this.image, this.x, this.y, this.width, this.height)
    }
}
