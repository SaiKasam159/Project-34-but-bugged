class Hero{
    constructor(x,y,width,height, image){
      var options ={ 
          isStatic: false,
          restitution: 0.4
        }
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;

      this.image = loadImage('superman.png')
    }
    display()
    {
        imageMode(CENTER);
        image(this.image, mouseX, mouseY, this.image.width*0.1, this.image.height*0.1);
    }
  
  
  }
  