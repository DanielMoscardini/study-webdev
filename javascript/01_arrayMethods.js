const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 150,
    category: "peripherals",
    inStock: true,
  },
  { id: 2, name: "Mouse", price: 80, category: "peripherals", inStock: true },
  { id: 3, name: "Monitor", price: 900, category: "displays", inStock: false },
  {
    id: 4,
    name: "Webcam",
    price: 200,
    category: "peripherals",
    inStock: false,
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 120,
    category: "accessories",
    inStock: true,
  },
  { id: 6, name: "Headset", price: 300, category: "audio", inStock: true },
];

// 1. Return an array with only the product names.
const namesOnly = products.map((product) => product.name);
console.log(namesOnly);

// 2. Return only the products that are in stock.
const productsAvaiable = products
  .filter((product) => product.inStock)
  .map((product) => product.name);
console.log(productsAvaiable);

// 3. Return the names of the products in stock that cost less than 200.
const productsAvaiable200 = products
  .filter((product) => product.inStock && product.price < 200)
  .map((product) => product.name);
console.log(productsAvaiable200);

// 4. Return the product with id 5. What do you get if you search for id 99?
const productId5 = products
  .filter((product) => product.id === 5)
  .map((product) => product.name);
console.log(
  `id5: ${productId5} - If search for id 99 it'll return an error, because that id doesn't exist in the array`,
);

// 5. Is there any out-of-stock product in the "peripherals" category?
const noStockPeripherals = products
  .filter((product) => product.category === "peripherals" && !product.inStock)
  .map((product) => product.name);
console.log(noStockPeripherals);

// 6. Return the total price of the products in stock.
const totalStock = products
  .filter((product) => product.inStock)
  .reduce((sum, value) => sum + value.price);
console.log(totalStock);

// 7. Return the products sorted by price, lowest first, WITHOUT changing the original array.

// 8. Return an array of objects with only { name, price }, where price has a discount of 10.

// 9. Given const wishlist = ["Mouse", "Headset", "Chair"], return the products whose name is in the wishlist.

// 10. Return a new array with an extra product added at the end, WITHOUT changing the original. Check the length of both arrays.

// 11. Challenge: return how many products each category has, as an object.
