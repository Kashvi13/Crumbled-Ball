class Paper{
constructor(x,y){
var options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2 
}

this.body =  Bodies.rectangle(x,y,70,70,options);
this.width = 70;
this.height = 70;
this.image = loadImage("paper.png");
World.add(world,this.body);

}
 display(){

fill("brown");
push();
translate(this.body.position.x,this.body.position.y);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();



 }
















}