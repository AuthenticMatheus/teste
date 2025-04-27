const mp = new MercadoPago('APP_USR-a0e89bb5-1696-4976-82db-b10860e07a96', {
    locale: 'pt-BR'
  });

  document.getElementById('checkout-btn').addEventListener('click', function () {
    fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': 'APP_USR-3546004845321058-042321-214a8cf1d88de3583f35265b0f92c2d8-1872785441', // Coloque seu Access Token aqui
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [
          {
            title: 'Produto Fictício',
            quantity: 1,
            currency_id: 'BRL',
            unit_price: 99.90
          }
        ]
      })
    })
    .then(response => response.json())
    .then(data => {
      mp.checkout({
        preference: {
          id: data.id
        },
        autoOpen: true,
      });
    })
    .catch(error => console.error(error));
  });