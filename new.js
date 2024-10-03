class Car {
   constructor(name, model, year, price) {
       this.name = name;
       this.model = model;
       this.year = year;
       this.price = price;
   }


   depreciationPriceCalc() {
      const currentYear = new Date().getFullYear();
      const age = currentYear - this.year;
      const depreciation = Math.max(0, this.price - (age * 500));
      return depreciation;
   }
}
class CarManager {
   constructor() {
       this.cars = [];
   }

   addCar(car) {
       this.cars.push(car);
   }

   displayCars() {
       return this.cars.map(car => {
           return `${car.name} ${car.model} (${car.year}): $${car.depreciationPriceCalc()}`;
       }).join('<br/>');
   }

   showTotalPrice() {
       const totalPrice = this.cars.reduce((total, car) => total + car.depreciationPriceCalc(), 0);
       return `Total Price of All Cars: $${totalPrice}`;
   }
}