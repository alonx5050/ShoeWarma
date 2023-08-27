function signupBody() {
    const body = {
        email: $('#email').val(),
        password: $('#password').val(),
    };
    return body;
}

function loginBody() {
    const body = {
        email: $('#email').val(),
        password: $('#password').val(),
    };
    return body;
}

function productBody(index) {
    const body = {
        price: $('#price').val(),
        brand: $('#brand').val(),
        frontImage: $('#image').val(),
        size: $('#size').val(),
        color: $('#color').val(),
    };
    return {
        name,
        price,
        brand,
        frontImage,
        size,
        color,
    };
}

export { signupBody, loginBody, productBody };