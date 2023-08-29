import { productBody } from "./bodyMaker.js";

async function addProduct() {
    const url = 'http://localhost:3000/products';

    $.ajax({
        type: 'POST',
        url,
        data: JSON.stringify(productBody()),
        contentType: 'application/json',
        success: function (data) {
            localStorage.setItem('product', JSON.stringify({ product: data.product }));
            window.location.href = "Homepage.html";
        },
        error: function (error) {
            console.log(error);
            alert(error.responseText);
        },
    });
}



export { addProduct };