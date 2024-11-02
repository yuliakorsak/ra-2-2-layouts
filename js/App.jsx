import { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';

export default function App({ layout, products }) {
  const [icon, changeIcon] = useState(layout);

  return (
    <div className='page'>
      <div className='header'>
        <IconSwitch icon={icon} onSwitch={() => {
          changeIcon(icon === 'view_module' ? 'view_list' : 'view_module');
        }} />
      </div>
      {icon === 'view_module' ? <ListView products={products} /> : <CardsView products={products} />}
    </div>
  );
}







