export default function ShopItem({ product }) {
  return (
    <div className='shop__product shop__product_item' style={{ backgroundImage: `url(${product.img})` }}>
      <div className='shop__product__name'>{product.name}</div>
      <div className='shop__product__color'>{product.color}</div>
      <div className='shop__product__buy_price'>${product.price}</div>
      <button className='shop__product__buy_btn'>Add to Cart</button>
    </div>
  )
}