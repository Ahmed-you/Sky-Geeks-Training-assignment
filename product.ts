// to run the TypeScript file you need to install Node.js and npm
// then install TypeScript globally by running`npm i -g typeScript` in the terminal
// `tsc product.ts` to compile the code then run `node product.js` to print it on the terminal

// Task 4
interface IProduct {
  name: string;
  price: number;
}

(() => {
  const calculateProductsPrice = (products: IProduct[]): number => {
    const productsPrice: number = products.reduce(
      (acc, product: IProduct) => acc + product.price,
      0
    );

    return productsPrice;
  };

  const products: IProduct[] = [
    { name: "product1", price: 10 },
    { name: "product2", price: 50 },
    { name: "product3", price: 5 },
    { name: "product4", price: 90 },
  ];
  const totalProductsPrice: number = calculateProductsPrice(products);
  console.log("the total price of all products is ", totalProductsPrice);
})();

// Task 5
(() => {
  const emailRegex: RegExp = /.+@.+\..+/;

  function validateEmail(email: string): boolean {
    return emailRegex.test(email);
  }

  console.log(
    "This should be true (example@example.com): ",
    validateEmail("example@example.com")
  );
  console.log(
    "This should be false (invalid-email): ",
    validateEmail("invalid-email")
  );
})();
