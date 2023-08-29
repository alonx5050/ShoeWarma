async function getAllOrders() {
  const url = 'http://localhost:3000/orders';
  //const orders = JSON.parse(localStorage.getItem('orders'));
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url,
      ContentType: 'application/json',
      success: function (orders) {
        resolve(orders);
      },
      error: function (error) {
        reject(error.responseText);
      },
    });
  });
}

export { getAllOrders };