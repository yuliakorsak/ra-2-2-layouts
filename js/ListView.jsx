import ShopItem from './ShopItem';

export default function ListView({ products }) {
  const items = products.map(product => <ShopItem product={product} />);
  return (
    <div className='shop list-view'>
      {items}
    </div>
  )
}
