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

function productBody(index) {
    return {
        name: $('#name').val(),
        brand: $('#brand').val(),
        color: $('#color').val(),
        size: parseInt($('#size').val()),
        price: parseInt($('#price').val()),
        frontImage: $('#image').val()
    };
}

export { signupBody, loginBody, productBody };