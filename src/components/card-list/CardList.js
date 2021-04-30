// Styles
import classes from './CardList.module.sass';

// Components
import { Card } from '@components';

const CardList = ({ cards }) => {

  const Cards = cards.map((details, i) => (
    <li className={ classes['card-list__item'] } key={ i }>
      <Card {...details}/>
    </li>
  ));

  return (
    <ul className={ classes['card-list'] }>
      { Cards }
    </ul>
  );
}

export default CardList;