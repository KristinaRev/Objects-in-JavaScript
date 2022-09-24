/*    Задание 5.
Переписать консольное приложение из предыдущего юнита на классы.
    Общие требования:
    Имена классов, свойств и методов должны быть информативными;
    Соблюдать best practices;
    Использовать синтаксис ES6.
*/

class Electro {
    constructor(name,power) {
      this.name = name;
      this.power = power;
      this.isPlugged = false;
    }
    plugIn() {
      console.log(this.name + "is plugged");
      this.isPlugged = true;
    }
    getPower(){
      return this.isPlugget ? this.power : 0
    }
  }
  
  const lamp = new Electro('lamp', 100);
  const laptop = new Electro('laptop', 1000);
  
  console.log(lamp.getPower() + laptop.getPower()); 
  lamp.plugIn(); 
  console.log(lamp.getPower() + laptop.getPower()); 
  laptop.plugIn();  
  console.log(lamp.getPower() + laptop.getPower());
  