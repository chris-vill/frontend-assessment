// Styles
import classes from './Button.module.sass';

// Libraries
import joinClasses from 'classnames';

const Button = ({ text, extClasses }) => {

  return (
    <button className={ joinClasses(classes['button'], extClasses) }>
      { text }
    </button>
  );
}

export default Button;