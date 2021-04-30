// Styles
import classes from './CardList.module.sass';

// Components
import { Card } from '@components';

const CardList = ({ numOfCards }) => {
  const Cards = generateCards(numOfCards);

  return (
    <ul className={ classes['card-list'] }>
      { Cards }
    </ul>
  );
}

function generateCards(numOfCards) {
  const Cards = [];

  for (let i = 0; i < numOfCards; i++) {
    Cards.push(
      <li key={ i }>
        <Card/>
      </li>
    );
  }

  return Cards;
}

export default CardList;