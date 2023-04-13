export const formatPrice = (value)=>{
    const myPrice =  value.toString()
    const decimals = myPrice.slice(-2);//take the last two numbers
    const whole = myPrice.slice(0,-2)
    return `${whole},${decimals}`
  }