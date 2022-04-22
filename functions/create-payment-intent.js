// domain/.netlify/functions/create-payment-intent

exports.handler = async function (event, context) {
  const { cart, livrare, total_amount } = JSON.parse(event.body)
  console.log(cart)
  return {
    statusCode: 200,
    body: JSON.stringify(cart),
  }
}
