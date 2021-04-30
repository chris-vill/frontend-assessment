// Styles
import classes from './Card.module.sass';

// Components
import { Button } from '@components';

const Card = ({ image, description }) => {

  return (
    <div className={ classes['card'] }>
      <img className={ classes['card__image'] } src={ image }/>
      <article className={ classes['card__description'] }>{ description }</article>
      <Button extClasses={ classes['button'] } text="R E A D &nbsp; M O R E"/>
    </div>
  );
}

export default Card;