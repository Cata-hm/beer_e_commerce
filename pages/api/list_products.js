import products from '../../database/products'
import stockPrice from '../../database/stock-price'


export default function handler(req, res) {

    const productWithPrice = []

    for (let x = 0; x < products.length; x++) {
      const price = stockPrice[products[x].skus[0].code].price
      productWithPrice.push({...products[x],price})
    }


    res.status(200).json(productWithPrice)
  }