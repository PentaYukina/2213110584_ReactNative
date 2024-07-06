enum ProductStatus {
  Available = "Available",
  OutOfStock = "OutOfStock",
  Discontinued = "Discontinued",
}

let products: any[] = [
  { name: "laptop", status: ProductStatus.Available, price: 1200 },
  { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
  { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];

function displayProductDetail(products: any[]) {
  products.forEach((product) => {
    console.log(
      `Product: ${product.name},Status: ${product.status},Price: ${product.price}`
    );
  });
} //end function

displayProductDetail(products);
