import ShopCard from './ShopCard';

export default function CardsView({ products }) {
  const cards = products.map(product => <ShopCard product={product} />);
  return (
    <div className='shop card-view'>
      {cards}
    </div>
  );
}