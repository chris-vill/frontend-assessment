// Styles
import classes from './Button.module.sass';

// Libraries
import classNames from 'classnames';

const Button = ({ text, extClasses }) => {

  return (
    <button className={ classNames(classes['button'], extClasses) }>
      { text }
    </button>
  );
}

export default Button;