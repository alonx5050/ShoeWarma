async function getAllProducts() {
    const url = 'http://localhost:3000/products';
    //const product = JSON.parse(localStorage.getItem('product'));
    return new Promise((resolve, reject) => {
      $.ajax({
        type: 'GET',
        url,
        ContentType: 'application/json',
        success: function (products) {
          resolve(products);
        },
        error: function (error) {
          reject(error.responseText);
        },
      });
    });
  }
  
  export { getAllProducts };