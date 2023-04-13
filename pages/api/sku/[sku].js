import products from '../../../database/products'


export default function handler(req, res) {
    const { sku } = req.query
    const filtered  = products.find(product => product.skus.map(sku => sku.code).includes(sku) )
    if(!filtered){
        res.status(500).json({ "error": "Invalid Code" })
    }
    res.status(200).json({ value : filtered })
  }