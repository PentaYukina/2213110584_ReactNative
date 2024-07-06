interface Book {
    title: string;
    genre:'fiction'| 'non-fiction'|'educational';
    price: number;
}

const books:Book[]=[
    {title:"The Great Gatsby",genre:"fiction",price:320},
    {title:"War and Peace",genre:"fiction",price:250},
    {title:"Economics 101",genre:"educational",price:480},
    {title:"In Cold Blood",genre:"non-fiction",price:300},
    {title:"The Catcher in the Rye",genre:"fiction",price:400}
]

function filterBookByPrice(books:Book[],minPrice:number):Book[]{
    return books.filter(book=>book.genre=='fiction'&&book.price>minPrice);

}


function discountBook(books:Book[]):Book[]{
    return books.map(book=>({...book,price:book.price*0.9}));

}

 //เรียกใช้ฟังก์ชัน
let filterBook = filterBookByPrice(books,300);
let discountBooks = discountBook(filterBook);

//แสดงผลลัพธ์ท่ต้องการ
console.log(discountBooks);