function signupBody() {
    return {
        email: $('#email').val(),
        password: $('#password').val(),
    };
}

function loginBody() {
    return  {
        email: $('#email').val(),
        password: $('#password').val(),
    };
}

function productBody() {
    return {
        name: $('#name').val(),
        brand: $('#brand').val(),
        color: $('#color').val(),
        size: parseInt($('#size').val()),
        price: parseInt($('#price').val()),
        frontImage: $('#image').val()
    };
}

function orderBody() {
    return {
        totalPrice: $('#totalPrice').val(),
    };
}

export { signupBody, loginBody, productBody, orderBody };