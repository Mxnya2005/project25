class Paper {
    constructor(x,y,r){
        var options= {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.3
        }
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(x,y,(r)/2,options)
        this.r= r
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    }
}