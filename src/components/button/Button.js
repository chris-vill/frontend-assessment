// Styles
import classes from './Button.module.sass';

// Libraries
import joinClasses from 'classnames';

const Button = ({ text, extClasses }) => {
  const styles = {
    button: joinClasses(classes['button'], extClasses)
  };

  return (
    <button className={ styles.button }>
      { text }
    </button>
  );
}

export default Button;