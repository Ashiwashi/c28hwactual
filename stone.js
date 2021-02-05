class Stone {
    constructor( width, height, angle){
        var options = {
            'restitution': 0.2,
            'friction': 0,
            'density': 0


        }
        this.body = Bodies.rectangle(100, 100, width, height, options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("Plucking mangoes/stone.png")
        World.add(world, this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();


    }

}