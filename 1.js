/*Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/

function func (obj) {
    for (let key in obj) {
       if (obj.hasOwnProperty(key)) {
         console.log(key);
      } else if (obj.hasOwnProperty(obj[key])) {
        console.log(obj[key]);
      }  
  }
  }