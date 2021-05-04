// Styles
import classes from './CardList.module.sass';

// Components
import { Card } from '@components';

const CardList = ({ cards }) => {
  const styles = {
    list: classes['card-list'],
    listItem: classes['card-list__item']
  };

  return (
    <ul className={ styles.list }> {
      cards.map((details, i) => (
        <li className={ styles.listItem } key={ i }>
          <Card {...details}/>
        </li>
      ))
    } </ul>
  );
}

export default CardList;