type Product = {
    name : string;
    price : number;
    category : string;
};

//กำหนด array ของ Product
let products : Product[] =[
    {name:'laptop',price:50000,category:'Electronics'},
    {name:'Shirt',price:1200,category:'Apparel'},
    {name:'Coffee Maker',price:2500,category:'Appliances'}
];

//สร้างฟังก์ชัน กรองตามราคา
function filterProductByPrice(products:Product[],minPrice:number):Product[]{
    return products.filter(product=>product.price>minPrice);

}

//สร้างฟังก์ชัน ลดราคา
function discountProduct(products:Product[]):Product[]{
    return products.map(product=>({...product,price:product.price*0.9}));

}

 //เรียกใช้ฟังก์ชัน
let filterProduct = filterProductByPrice(products,2000);
let discountProducts = discountProduct(filterProduct);

//แสดงผลลัพธ์ท่ต้องการ
//console.log(filterProduct);
console.log(discountProducts);