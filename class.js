class Rectangle{
    constructor(length,width){
        this.length = length,
        this.width = width
    }
    getArea(){
        console.log(`Area is : ${this.length*this.width}`);
    }
}

class Square extends Rectangle{
    constructor(side){
       
        super(side,side);
        this.side = side;

    }
    getPerimeter(){
        console.log(`Perimeter is : ${4*this.side}`)
    }
}


 let square = new Square(5);
 square.getArea();
 square.getPerimeter();