import products from '../../../database/stock-price'

export default function handler(req, res) {
    const { code } = req.query
    const filtered  = products[code]
    if(!filtered){
        res.status(500).json({ "error": "Invalid Code" })
    }
    res.status(200).json({ value : filtered })
  }