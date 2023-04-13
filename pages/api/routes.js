// import productsData from './products.js';
// import stockAndPriceData from './stock-price.js';

// export const getProductStockAndPrice = (req, res) => {
//   const skuCode = req.params.skuCode; // Extract SKU code from request parameters

//   // Check if the SKU code exists in the stock and price data
//   if (stockAndPriceData.hasOwnProperty(skuCode)) {
//     const stockAndPrice = stockAndPriceData[skuCode];
//     const product = productsData.find(product => {
//       return product.skus.some(sku => sku.code === skuCode);
//     });

//     // Check if the product with the given SKU code is found in the products data
//     if (product) {
//       const response = {
//         id: product.id,
//         brand: product.brand,
//         image: product.image,
//         style: product.style,
//         substyle: product.substyle,
//         abv: product.abv,
//         origin: product.origin,
//         information: product.information,
//         sku: {
//           code: skuCode,
//           name: product.skus.find(sku => sku.code === skuCode).name,
//           stock: stockAndPrice.stock,
//           price: stockAndPrice.price
//         }
//       };
//       res.json(response); // Send the response as JSON
//     } else {
//       res.status(404).json({ error: 'Product not found' }); // Send 404 error if product is not found
//     }
//   } else {
//     res.status(404).json({ error: 'Stock and price information not found' }); // Send 404 error if stock and price information is not found
//   }
// };
