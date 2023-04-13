import products from '../../../database/products'


export default function handler(req, res) {
    const { id } = req.query
    const filtered  = products.find(product => product.id === parseInt(id) )
    if(!filtered){
        res.status(500).json({ "error": "Invalid Code" })
    }
    res.status(200).json({ value : filtered })
  }