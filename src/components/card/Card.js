// Styles
import classes from './Card.module.sass';

// Components
import { Button } from '@components';

const Card = ({ image, description }) => {
  const styles = {
    card: classes['card'],
    image: classes['card__image'],
    description: classes['card__description'],
    button: classes['button']
  };

  return (
    <div className={ styles.card }>
      <img className={ styles.image } src={ image }/>
      <article className={ styles.description }>{ description }</article>
      <Button extClasses={ styles.button } text="R E A D &nbsp; M O R E"/>
    </div>
  );
}

export default Card;