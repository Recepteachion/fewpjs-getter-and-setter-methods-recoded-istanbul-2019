// Add your Circle class here

class Circle{
  constructor(radius){
    this.radius = radius;
  }
  
  get diameter(){
    return this.radius*2
  }
  set diameter(value){
    this.radius=value;
    return this.radius*2;
  }
  
  get circumference(){
    return Math.PI*this.diameter;
  }
  
  set circumference(value){
    this.radius=value;
    return Math.PI*this.radius*2;
  }
  
  get area(){
    return Math.PI*this.radius*this.radius;
  }
  
  set area(value){
    this.radius=value;
    return Math.PI*this.radius*this.radius;
  }
}