// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions ex. static keywords, encapsulation, inheritance

class Product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }

  displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price}`);
  }

  calculateTotal(salesTax){
    return this.price + (this.price * salesTax);
  }
}

const product1 = new Product("Shirt", 18.99);
const product2 = new Product("Pants", 20.99);

const salesTax = 0.05;

product1.displayProduct();
product2.displayProduct();

const total1 = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total1.toFixed(2)}`)

const total2 = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total2.toFixed(2)}`)