class Polygon {
  constructor(x, y,width,height) {
    var options = {
        'restitution':1,
        'friction':0.8,
        'density':0.5
    }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;      
  this.x = x;
  this.y = y;
  this.image=loadImage("ImgHexa.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.width);
    pop();
  }
};
