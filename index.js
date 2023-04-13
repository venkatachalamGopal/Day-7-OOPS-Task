
// Question-1: Write a classMovie with values;

class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;

    }
    getPG(rating){
        return [this.title,this.studio,rating]
    }
}
const obj=new Movie("Casino Royale","Eon Productions","PG13")
// console.log(obj);
console.log(obj.getPG("PG"));


// Question-2:Write class for Circle

class Circle {
   
    constructor(radius) {
      this.radius = radius;
    }
    
    area(){
      return Math.PI * Math.pow(this.radius, 2);
    }
    
     circumference() {
      return 2 * Math.PI * this.radius;
    }
        
     diameter(){
      return this.radius * 2;
    }
  }

  const obj2=new Circle("10")
  console.log("Circle Area :-",obj2.area());
  console.log("Circle circumference :-",obj2.circumference());
  console.log("Circle Diameter :-",obj2.diameter());


//Question-3   Write a “person” class to hold all the details.

class Person{

    constructor(name,age,gender,deg,place){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.deg=deg;
        this.place=place;

    }

    personDetails(){
        return(`Hello My name is ${this.name} i am ${this.age} old studied in ${this.deg} from ${this.place}.`);

    }
}

const profile=new Person("John",28,"male","MCA","chennai")
console.log(profile.personDetails());



// 4.write a class to calculate the uber price.



class UberPriceCalculator{
    constructor(a,b,c,){
        this.baseFare=a;
        this.Permile=b;
        this.Perminutes=c;
    }

    calculate(distance,duration){
        const disPerMiles=distance/1609.344;
        const durationPerMinutes=duration/60;
        console.log(disPerMiles,durationPerMinutes);
        const totalFare=this.baseFare+(this.Perminutes*durationPerMinutes)+(this.Permile*disPerMiles)
        return totalFare;

    }
}
const car=new UberPriceCalculator(2.5,1.5,0.3);
// 10 kilomter,15minutes Travel
const price=car.calculate(10000,900)
console.log(`Price for 10 Km is Rs-${price.toFixed(2)}`);
