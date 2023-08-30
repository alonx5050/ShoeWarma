import { orderBody } from "./bodyMaker.js";

async function addOrder() {
    const url = 'http://localhost:3000/order';

    $.ajax({
        type: 'POST',
        url,
        data: JSON.stringify(orderBody()),
        contentType: 'application/json',
        success: function (data) {
            localStorage.setItem('order', JSON.stringify({ Order: data.order }));
            window.location.href = "Homepage.html";
        },
        error: function (error) {
            console.log(error);
            alert(error.responseText);
        },
    });
}



export { addOrder };